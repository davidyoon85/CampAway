# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  zip_code        :integer          not null
#  email_address   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email_address, presence: true, uniqueness: true

  after_initialize :ensure_session_token

  has_many :spots,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: :Spot

  has_many :reviews,
    primary_key: :id,
    foreign_key: :author,
    class_name: :Review
  
  has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Booking

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end

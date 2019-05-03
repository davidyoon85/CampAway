# == Schema Information
#
# Table name: spots
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  lat        :float            not null
#  long       :float            not null
#  body       :text             not null
#  host_id    :integer          not null
#  price      :integer          not null
#  group_size :integer          not null
#  campfire   :boolean          not null
#  pets_allow :boolean          not null
#  check_in   :string           not null
#  check_out  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tent       :boolean          default(FALSE)
#  sites      :integer
#  parking    :boolean          default(FALSE)
#  toilet     :boolean          default(FALSE)
#  shower     :boolean          default(FALSE)
#  hiking     :boolean          default(FALSE)
#  biking     :boolean          default(FALSE)
#  wildlife   :boolean          default(FALSE)
#  paddling   :boolean          default(FALSE)
#  image_url  :string
#

class Spot < ApplicationRecord
  validates :title, :body, :host_id, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many :reviews,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: :Review

  has_many :bookings,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: :Booking

  has_many_attached :photos
end

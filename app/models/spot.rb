class Spot < ApplicationRecord
  validates :title, :body, :host_id, presence: true
  # geocoded_by :address
  # after_validation :geocode

  # def address
  #   [street, city, state].compact.join(', ')
  # end


  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many_attached :photos
end
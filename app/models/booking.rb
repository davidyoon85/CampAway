# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  guest_id   :integer          not null
#  spot_id    :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
    validates :guest_id, :spot_id, :check_in, :check_out, :num_guests, presence: true
  
    belongs_to :user,
      primary_key: :id,
      foreign_key: :guest_id,
      class_name: :User
    
    belongs_to :spot,
      primary_key: :id,
      foreign_key: :spot_id,
      class_name: :Spot
  end

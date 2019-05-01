# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  author      :integer          not null
#  spot_id     :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
    validates :spot_id, :description, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author,
        class_name: :User

    belongs_to :spot,
        primary_key: :id,
        foreign_key: :spot_id,
        class_name: :Spot

end

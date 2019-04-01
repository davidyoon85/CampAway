class Spot < ApplicationRecord
    validates :title, :lat, :long, :body, :host_id, :price, :group_size, 
    :campfire, :pets_allow, :check_in, :check_out, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User
end
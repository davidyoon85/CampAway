class Spot < ApplicationRecord
    validates :title, :body, :host_id, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User
end
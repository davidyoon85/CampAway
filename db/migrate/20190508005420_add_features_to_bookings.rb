class AddFeaturesToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :num_guests, :integer
    add_column :bookings, :total_price, :integer
  end
end

json.set! @booking.id do
  json.extract! @booking, :id, :guest_id, :spot_id, :check_in, :check_out, :num_guests, :total_price

end
json.set! @booking.id do
  json.extract! @booking, :guest_id, :spot_id
end
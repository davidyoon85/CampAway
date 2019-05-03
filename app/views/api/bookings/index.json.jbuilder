@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :guest_id, :spot_id

    json.spot do
      json.extract! booking.spot, :id, :title
    end

  end
end
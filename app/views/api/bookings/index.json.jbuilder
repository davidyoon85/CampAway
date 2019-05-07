@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :guest_id, :spot_id, :check_in, :check_out

    json.spot do
      json.extract! booking.spot, :id, :title, :body
    end

  end
end
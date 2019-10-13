
  json.set! booking.id do

     json.extract! booking, :id, :guest_id, :spot_id, :check_in, :check_out, :num_guests, :total_price

    json.spot do
      json.extract! booking.spot, :id, :title, :body

      booking.spot.photos.each do |photo|
          json.spotImg url_for(photo)
      end
    end

  end
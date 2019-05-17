
  json.set! spot.id do

    json.extract! spot, :id, :host_id, :title, :body, :price,
      :pets_allow, :group_size, :check_in, :check_out, 
      :lat, :long, :campfire, :tent, :sites, :parking, :toilet, :shower, 
      :hiking, :biking, :wildlife, :paddling, :reviews

    json.set! "user" do
      json.partial! '/api/users/user', user: spot.host
    end

    if spot.photos.attached? 
      json.photoUrls spot.photos.map { |photo| url_for(photo) }
    end
  end

  json.set! spot.id do
    json.extract! spot, :id, :host_id, :title, :body, :price,
      :pets_allow, :group_size, :check_in, :check_out, 
      :lat, :long
  end

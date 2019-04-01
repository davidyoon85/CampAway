@spots.each do |spot|
  json.partial! "api/spots/spot", spot: spot
end
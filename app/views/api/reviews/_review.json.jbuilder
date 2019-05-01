json.extract! review,
  :id,
  :spot_id,
  :description
  json.spot_name review.spot.name

json.set! "user" do
  json.partial! '/api/users/user', user: review.author
end
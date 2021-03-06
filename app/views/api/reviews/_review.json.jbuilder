json.extract! review,
  :id,
  :spot_id,
  :created_at,
  :description
  json.spot_title review.spot.title
  json.created_at

json.set! "user" do
  json.partial! '/api/users/user', user: review.review_author
end
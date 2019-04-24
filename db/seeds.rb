# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Spot.delete_all

user1 = User.create(
    password: '123456',
    first_name: 'David',
    last_name: 'Yoon',
    zip_code: 123456,
    email_address: 'david@yoon.com'
)

user2 = User.create(
    password: '123456',
    first_name: 'Aleom',
    last_name: 'Kim',
    zip_code: 123456,
    email_address: 'aleom@kim.com'
)

user3 = User.create(
    password: '123456',
    first_name: 'Rachel',
    last_name: 'Yoon',
    zip_code: 123456,
    email_address: 'rachel@yoon.com'
)

user3 = User.create(
    password: '123456',
    first_name: 'Binjie',
    last_name: 'Luo',
    zip_code: 123456,
    email_address: 'binjie@luo.com'
)

demo = User.create(
    password: '123456',
    first_name: 'Guest',
    last_name: 'User',
    zip_code: 123456,
    email_address: 'demo@demo.com'
)

spot1 = Spot.create!(
    "host_id": user1.id,
    "title": "Cabin in the Woods",
    "body": "Our cozy cabins with wood-burning fireplaces are the real deal in terms 
    of country vacations!",
    "price": 100,
    "pets_allow": true,
    "group_size": 4,
    "check_in": "2 PM",
    "check_out": "11 AM",
    "lat": 40.73061,
    "long": -73.935242,
    "campfire": true,
    "tent": false,
    "sites": 1,
    "parking": false,
    "toilet": false,
    "shower": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": true
)

spot2 = Spot.create!(
    "host_id": user1.id,
    "title": "Oh! Pear Orchards",
    "body": "Oh! Pear Orchards is nestled in the Endless Mountain Region in Northeastern PA.",
    "price": 25,
    "pets_allow": true,
    "group_size": 30,
    "check_in": "2 PM",
    "check_out": "11 AM",
    "lat": 40.759263, 
    "long": -73.985152,
    "campfire": true,
    "tent": false,
    "sites": 15,
    "parking": false,
    "toilet": false,
    "shower": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": false
)

spot3 = Spot.create!(
    "host_id": user1.id,
    "title": "Blue Mountain Camping",
    "body": "Secluded but still close to everything. Ideal for large groups with ample space for parking.",
    "price": 98,
    "pets_allow": true,
    "group_size": 56,
    "check_in": "1 PM",
    "check_out": "12 PM",
    "lat": 40.748813,
    "long": -73.985699,
    "campfire": true,
    "tent": false,
    "sites": 1,
    "parking": false,
    "toilet": true,
    "shower": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": false
)

spot4 = Spot.create!(
    "host_id": user1.id,
    "title": "Enveloped in Woods",
    "body": "Pitch your tent on a beautiful horse farm. You can ride horses and have beautiful trails to walk on.",
    "price": 70,
    "pets_allow": true,
    "group_size": 10,
    "check_in": "10 AM",
    "check_out": "5 PM",
    "lat": 40.73061,
    "long": -73.935242,
    "campfire": true,
    "tent": false,
    "sites": 4,
    "parking": false,
    "toilet": true,
    "shower": true,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": true
)

spot5 = Spot.create!(
    "host_id": user1.id,
    "title": "Lakeside Forest",
    "body": "Enjoy a camp fire with friends by beautiful Beach Pond. Traditional wood-fired sauna available to all guests.",
    "price": 50,
    "pets_allow": true,
    "group_size": 4,
    "check_in": "2 PM",
    "check_out": "12 PM",
    "lat": 40.705581,
    "long": -74.002641,
    "campfire": true,
    "tent": false,
    "sites": 1,
    "parking": true,
    "toilet": true,
    "shower": true,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": false
)

spot6 = Spot.create!(
    "host_id": user1.id,
    "title": "Mountain Top Campsite",
    "body": "A beautiful, secluded site to bring friends to enjoy this beautiful location.",
    "price": 75,
    "pets_allow": true,
    "group_size": 11,
    "check_in": "3 PM",
    "check_out": "12 PM",
    "lat": 40.740747,
    "long": -73.983189,
    "campfire": true,
    "tent": false,
    "sites": 1,
    "parking": true,
    "toilet": true,
    "shower": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": false
)

spot7 = Spot.create!(
    "host_id": user1.id,
    "title": "Peaceful Flow",
    "body": "Pitch your tent across the bridge from the main house in a half acre of serenity on our private deck along Peters River.",
    "price": 35,
    "pets_allow": true,
    "group_size": 4,
    "check_in": "2 PM",
    "check_out": "12 PM",
    "lat": 40.73061,
    "long": -73.935242,
    "campfire": true,
    "tent": false,
    "sites": 1,
    "parking": true,
    "toilet": true,
    "shower": true,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": true
)

spot8 = Spot.create!(
    "host_id": user1.id,
    "title": "Cedar Creek",
    "body": "Pitch your tent in our hay field or set up a spot in the woods. Fish off our dock. Dark skies for viewing the stars.",
    "price": 100,
    "pets_allow": true,
    "group_size": 55,
    "check_in": "11 AM",
    "check_out": "12 PM",
    "lat": 40.886110,
    "long": -74.044673,
    "campfire": true,
    "tent": false,
    "sites": 5,
    "parking": true,
    "toilet": true,
    "shower": false,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": false
)

spot9 = Spot.create!(
    "host_id": user1.id,
    "title": "Rustic, Enchanted Cabin",
    "body": "Wake up to gorgeous views after you have a very restful sleep in this solar powered cabin.",
    "price": 160,
    "pets_allow": true,
    "group_size": 6,
    "check_in": "2 PM",
    "check_out": "11 AM",
    "lat": 40.757777,
    "long": -74.179623,
    "campfire": true,
    "tent": false,
    "sites": 1,
    "parking": true,
    "toilet": true,
    "shower": true,
    "hiking": true,
    "biking": true,
    "wildlife": true,
    "paddling": false
)

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_0.jpg')
spot1.photos.attach(io: file, filename: "spot1_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_1.jpg')
spot1.photos.attach(io: file, filename: "spot1_1.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_2.jpg')
spot1.photos.attach(io: file, filename: "spot1_2.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_3.jpg')
spot1.photos.attach(io: file, filename: "spot1_3.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_4.jpg')
spot1.photos.attach(io: file, filename: "spot1_4.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_5.jpg')
spot1.photos.attach(io: file, filename: "spot1_5.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_6.jpg')
spot1.photos.attach(io: file, filename: "spot1_6.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_7.jpg')
spot1.photos.attach(io: file, filename: "spot1_7.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot1_8.jpg')
spot1.photos.attach(io: file, filename: "spot1_8.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot2_0.jpg')
spot2.photos.attach(io: file, filename: "spot2_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot2_1.png')
spot2.photos.attach(io: file, filename: "spot2_1.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot2_2.png')
spot2.photos.attach(io: file, filename: "spot2_2.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot2_3.png')
spot2.photos.attach(io: file, filename: "spot2_3.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot2_4.png')
spot2.photos.attach(io: file, filename: "spot2_4.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot2_5.png')
spot2.photos.attach(io: file, filename: "spot2_5.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot3_0.jpg')
spot3.photos.attach(io: file, filename: "spot3_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot3_1.png')
spot3.photos.attach(io: file, filename: "spot3_1.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot3_2.png')
spot3.photos.attach(io: file, filename: "spot3_2.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot3_3.png')
spot3.photos.attach(io: file, filename: "spot3_3.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot3_4.png')
spot3.photos.attach(io: file, filename: "spot3_4.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot3_5.png')
spot3.photos.attach(io: file, filename: "spot3_5.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot4_0.jpg')
spot4.photos.attach(io: file, filename: "spot4_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot4_1.png')
spot4.photos.attach(io: file, filename: "spot4_1.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot4_2.png')
spot4.photos.attach(io: file, filename: "spot4_2.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot4_3.png')
spot4.photos.attach(io: file, filename: "spot4_3.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot4_4.png')
spot4.photos.attach(io: file, filename: "spot4_4.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot4_5.png')
spot4.photos.attach(io: file, filename: "spot4_5.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot5_0.jpg')
spot5.photos.attach(io: file, filename: "spot5_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot5_1.jpg')
spot5.photos.attach(io: file, filename: "spot5_1.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot5_2.jpg')
spot5.photos.attach(io: file, filename: "spot5_2.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot5_3.jpg')
spot5.photos.attach(io: file, filename: "spot5_3.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot5_4.jpg')
spot5.photos.attach(io: file, filename: "spot5_4.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot6_0.jpg')
spot6.photos.attach(io: file, filename: "spot6_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot6_1.jpg')
spot6.photos.attach(io: file, filename: "spot6_1.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot6_2.jpg')
spot6.photos.attach(io: file, filename: "spot6_2.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot6_3.jpg')
spot6.photos.attach(io: file, filename: "spot6_3.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot6_4.jpg')
spot6.photos.attach(io: file, filename: "spot6_4.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot6_5.jpg')
spot6.photos.attach(io: file, filename: "spot6_5.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot7_0.jpg')
spot7.photos.attach(io: file, filename: "spot7_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot7_1.png')
spot7.photos.attach(io: file, filename: "spot7_1.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot7_2.png')
spot7.photos.attach(io: file, filename: "spot7_2.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot7_3.png')
spot7.photos.attach(io: file, filename: "spot7_3.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot7_4.png')
spot7.photos.attach(io: file, filename: "spot7_4.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot7_5.png')
spot7.photos.attach(io: file, filename: "spot7_5.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot8_0.jpg')
spot8.photos.attach(io: file, filename: "spot8_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot8_1.png')
spot8.photos.attach(io: file, filename: "spot8_1.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot8_2.png')
spot8.photos.attach(io: file, filename: "spot8_2.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot8_3.png')
spot8.photos.attach(io: file, filename: "spot8_3.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot8_4.png')
spot8.photos.attach(io: file, filename: "spot8_4.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot8_5.png')
spot8.photos.attach(io: file, filename: "spot8_5.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot9_0.jpg')
spot9.photos.attach(io: file, filename: "spot9_0.jpg")

file = open('https://s3.amazonaws.com/camp-away-dev/spot9_1.png')
spot9.photos.attach(io: file, filename: "spot9_1.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot9_2.png')
spot9.photos.attach(io: file, filename: "spot9_2.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot9_3.png')
spot9.photos.attach(io: file, filename: "spot9_3.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot9_4.png')
spot9.photos.attach(io: file, filename: "spot9_4.png")

file = open('https://s3.amazonaws.com/camp-away-dev/spot9_5.png')
spot9.photos.attach(io: file, filename: "spot9_5.png")

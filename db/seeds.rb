# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

demo = User.create(
    password: '123456',
    first_name: 'Guest',
    last_name: 'User',
    zip_code: 123456,
    email_address: 'demo@demo.com'
)

    # t.boolean "campfire", null: false
    # t.boolean "pets_allow", null: false
    # t.boolean "tent", default: false
    # t.integer "sites"
    # t.boolean "parking", default: false
    # t.boolean "toilet", default: false
    # t.boolean "shower", default: false
    # t.boolean "hiking", default: false
    # t.boolean "biking", default: false
    # t.boolean "wildlife", default: false
    # t.boolean "paddling", default: false

spot1 = Spot.create!(
    title: 'Cabin in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot2 = Spot.create!(
    title: 'Log Cabin in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot3 = Spot.create!(
    title: 'Metal Cabin in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot4 = Spot.create!(
    title: 'House in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot5 = Spot.create!(
    title: 'Log House in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot6 = Spot.create!(
    title: 'Metal House in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)
spot7 = Spot.create!(
    title: 'Tent in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot8 = Spot.create!(
    title: 'Log Tent in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)

spot9 = Spot.create!(
    title: 'Metal Tent in the Woods',
    lat: 40.730610, 
    long: -73.935242,
    body: "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms of country vacations.  Full kitchens, out-back campfire circles, and lots of other amenities. We are family and pet friendliest in Catskills. All guests have free access to our pool in the summer months (and of course the natural swimming holes in the river)!",
    host_id: user1.id, 
    price: 100, 
    group_size: 4,
    campfire: true, 
    pets_allow: true,
    check_in: '2 PM', 
    check_out: '11 AM',
    hiking: true,
    biking: true,
    wildlife: true,
    paddling: true
)
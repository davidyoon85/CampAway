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
    "host_id": user1.id,
    "title": "Cabin in the Woods",
    "body": "Year round lodging in Catskills. For lovers of hiking, skiing, hunting, 
    tubing, fishing, tennis, golf, sitting by the fireplace, or enjoying the great 
    outdoors. Our cozy cabins with wood-burning fireplaces are the real deal in terms 
    of country vacations.  Full kitchens, out-back campfire circles, and lots of other 
    amenities. We are family and pet friendliest in Catskills. All guests have free 
    access to our pool in the summer months (and of course the natural swimming holes 
    in the river)!",
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
    "body": "Oh! Pear Orchards is nestled in the Endless Mountain Region in Northeastern 
    PA. Located on the fertile ground between two rivers, the orchard has several 
    varieties of pears, including, but not limited to, Olympic Giants, Hosui, Bartlett 
    and 21st Century. In addition to selling Asian pears, Oh! Pear offers a look at a 
    close to zero energy and negative carbon footprint.",
    "price": 25,
    "pets_allow": true,
    "group_size": 30,
    "check_in": "2 PM",
    "check_out": "11 AM",
    "lat": 40.73061,
    "long": -73.935242,
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
    "title": "Blue Mountain Private Camping",
    "body": "Private Camping, only one group at a time. Secluded but still close to 
    everything. Ideal for large groups with ample space for parking. 20+ acres of a 
    46 acre property are set aside for guest campers. 2 miles from the town of 
    Palmerton, 2 miles to Blue Mountain Ski Resort, close to Beltzville State Park and 
    Lehigh Gap (Appalachian Trail). Hiking trails, rock climbing and a nice stream are 
    features of the site. ",
    "price": 98,
    "pets_allow": true,
    "group_size": 56,
    "check_in": "1 PM",
    "check_out": "12 PM",
    "lat": 40.73061,
    "long": -73.935242,
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
    "body": "Pitch your tent in the woods on a beautiful horse farm. You can ride horses, 
    live amongst goats, see other animals and have beautiful trails to walk on. Two 
    areas for bathroom facilities. 5 minute walk from campsite to new bathroom area with 
    outdoor shower, 3 stalls and two urinals. We have over a mile of a sanded woods trail, 
    and 130 acres of woods to enjoy. Campsites are near the scenic Manalapan Brook where 
    animals are often spotted.",
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
    "title": "Lakeside Forest with Sauna",
    "body": "Pitch your tent in the forest at North Shore Woods. Enjoy a camp fire with 
    friends by beautiful Beach Pond. Traditional wood-fired sauna available to all guests. 
    Not a secluded location but one that will not disappoint! No RV's please.",
    "price": 50,
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
    "paddling": false
)

spot6 = Spot.create!(
    "host_id": user1.id,
    "title": "Mountain Top Campsite",
    "body": "Pitch your tent in the middle of our 450 acre farm, in our peach and apple 
    orchard. You have access to a fire pit, applewood (sold in bundles at ourfarm market), 
    and a picnic table. A beautiful, secluded site to bring friends to enjoy this 
    beautiful location. As we are a working farm, you can see us driving through with 
    our tractors or maintaining the orchard around your campsite on occasion. . You are 
    welcome to ride your bikes, hike or jog where you will pass ponds and a working farm 
    landscape. PLEASE don’t pick our fruit. If you would like to enjoy the fruits of our 
    labor please come down to our farm store, open year round, on the premises where we 
    sell cheeses, fresh picked fruit and veggies, meats, and our famous cider donuts 
    along with other farm products. We also have a farm brewery in our old dairy barn for 
    you to enjoy.",
    "price": 75,
    "pets_allow": true,
    "group_size": 11,
    "check_in": "3 PM",
    "check_out": "12 PM",
    "lat": 40.73061,
    "long": -73.935242,
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
    "body": "Pitch your tent across the bridge from the main house in a half acre of 
    serenity on our private deck along Peters River. Enjoy the peace the changing trees 
    provide, let the orchestra of birds transport you....forget you're 5 minutes from 
    Cumbies! Enjoy a fire, use the grill, chill in the hammock or do nothing but forest 
    bathe. We are a small farmette with chickens, ducks, fruits, veggies, herbs and 
    dogs and dogs, did I say we have dogs. Ask what is in season and prepare your 
    meal with items grown from the farm! Don't forget to visit the ducklings and 
    baby chicks!!!",
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
    "body": "Pitch your tent in our hay field or set up a spot in the woods. Fish off 
    our dock. Dark skies for viewing the stars.",
    "price": 100,
    "pets_allow": true,
    "group_size": 55,
    "check_in": "11 AM",
    "check_out": "12 PM",
    "lat": 40.73061,
    "long": -73.935242,
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
    "body": "Wake up to gorgeous views after you have a very restful sleep in this solar 
    powered 12 x 12 cabin located in a private area on a 52 acre farm Bed & Breakfast. 
    Only 6 miles from Bethel Woods Center for the Arts.

    Price includes full farm fresh breakfast for 2 served down at the farmhouse.

    Cabin has a full bed, a twin trundle and a twin bunk. Only fits 4 people max if two 
    stay in the full together, and 2 additional campers can sleep in tents outside if 
    you'd like. If you add two more campers for tent-camping, it includes one additional 
    breakfast.",
    "price": 160,
    "pets_allow": true,
    "group_size": 6,
    "check_in": "2 PM",
    "check_out": "11 AM",
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
    "paddling": false
)
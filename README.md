# CampAway
CampAway is a full-stack clone of Hipcamp, which is a site to browse and book camping grounds.

![Splash](app/assets/images/campaway.png =100x20)

You can visit CampAway [here](https://camp-away.herokuapp.com/#/)!

## Features

### User Auth
Users are able to create accounts, login and logout using the authentication system, which was created using BCrypty on a rails backend. Users can also login as a demo user so that they can easily browse the site.

![User Auth](app/assets/images/user_auth.png =100x20)

### Host a Spot
Users are able to create their own camping ground by filling out a form. The form was rendered using React and gives the impression of being 3 pages, where it is actually one component. This effect was achieved by using React fragment. Users can choose from various camp features to illustrate what their spot offers. Once a user has created a spot, they are then able to delete it as well.

![Host a Spot](app/assets/images/campaway_host.png =100x20)

## Future Plans
In the future, I hope to add more features, including: bookings and filtering. I also have plans to improve the google map API implementation so that clicking on an infowindow will lead to that camp site's location on the index page.

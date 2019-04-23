# CampAway
CampAway is a clone of Hipcamp, which is a site to browse and book camping grounds.

You can visit CampAway [here](https://camp-away.herokuapp.com/#/)!

## Features

### User Auth
Users are able to create accounts, login and logout using the authentication system, which was created using BCrypty on a rails backend. Users can also login as a demo user so that they can easily browse the site.

![Host a Spot](lib/assets/user_auth.png)

### Host a Spot
Users are able to create their own camping ground by filling out a form. The form was rendered using React and gives the impression of being 3 pages, where it is actually one component. This effect was achieved by using React fragment. Users can choose from various camp features to illustrate what their spot offers. Once a user has created a spot, they are then able to delete it as well.

![Host a Spot](lib/assets/campaway_host.png)

Code snippets to highlight your best code (markdown code snippets, NOT screenshots)

## Future Plans
In the future, I hope to add more features, including: bookings and filtering. I also have plans to improve the google map API implementation so that clicking on an infowindow will lead to that camp site's location on the index page.

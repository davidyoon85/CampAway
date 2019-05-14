# CampAway
CampAway is a full-stack clone of Hipcamp, which is a site to browse and book camping grounds.

<p align="center">
<img src="./app/assets/images/campaway.png" width="700" height="400" align="middle"/>
</p>

You can visit CampAway [here](https://camp-away.herokuapp.com/#/)!

## Features

### User Auth
Users are able to create accounts, login and logout using the authentication system, which was created using BCrypty on a rails backend. Users can also login as a demo user so that they can easily browse the site.

<p align="center">
<img src="./app/assets/images/user_auth.png" width="300" height="400" align="middle"/>
 </p>

### Host a Spot
Users are able to create their own camping ground by filling out a form. The form was rendered using React and gives the impression of being 3 pages, where it is actually one component. This effect was achieved by using React fragment. Users can choose from various camp features to illustrate what their spot offers. Once a user has created a spot, they are then able to delete it as well.

<p align="center">
<img src="./app/assets/images/campaway_host.png" width="300" height="400" align="middle"/>
 </p>
 
### Filter Spots
Users can filter through the spot locations by selecting from a list of categories, including: price, group size and amenities. Once a user has made a selection, they can make more selections. After each choice is made, the spot index is automatically updated to reflected the selected filters. Users may also clear all filters.

<p align="center">
<img src="./app/assets/images/spot_filter.png" width="600" height="400" align="middle"/>
</p>

## Future Plans
In the future, I hope to add more features, including: user profile, search bar filtering. I also have plans to improve the review section, by allowing users to post photos along with their comments.


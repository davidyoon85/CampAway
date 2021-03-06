import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import Nav from "./nav/nav";
import Splash from "./splash";
import SpotContainer from "./spot/spot_container";
import SpotFormContainer from "./spot/spot_form_container";
import SpotSearchContainer from "./explore/spot_search_container";
import CreateReviewContainer from "./reviews/create_review_container";
import EditReviewContainer from "./reviews/edit_review_container";
import UserProfileContainer from "./user/user_profile_container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIgloo } from "@fortawesome/free-solid-svg-icons/faIgloo";

library.add(faIgloo);

const App = () => {
  return (
    <div className="app_container">
      <Route path="/" component={Nav} />
      <div className="main-class">
        <Switch>
          <Route exact path="/spots/:spotId" component={SpotContainer} />
          <Route exact path="/spots" component={SpotSearchContainer} />
          <ProtectedRoute
            path="/spots/:spotId/review/new"
            component={CreateReviewContainer}
          />
          <ProtectedRoute
            path="/spots/:spotId/reviews/:reviewId"
            component={EditReviewContainer}
          />
          <ProtectedRoute path="/host" component={SpotFormContainer} />
          <ProtectedRoute
            path="/users/:userId"
            component={UserProfileContainer}
          />
          <Route exact path="/" component={Splash} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

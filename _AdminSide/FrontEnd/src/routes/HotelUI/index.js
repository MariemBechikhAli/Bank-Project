import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";
const HotelViews = ({match}) => (
  <Switch  >
    <Redirect exact from={`${match.url}/`} to={`${match.url}/hotels`}/>
    <Route path={`${match.url}/hotels-list`} component={asyncComponent(() => import('./Hotels-List'))}/>
   

  </Switch>
);

export default HotelViews;

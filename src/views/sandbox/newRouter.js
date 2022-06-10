import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import HomeList from "./home/home";
import RoleList from "./right-manage/right/list";
import Not404 from "./404/not";

// const routerAddress = {
//   '/home': HomeList,
//   '/right-manage/right/list': RoleList,
// }

const  NewRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={HomeList} />
      <Route path="/right-manage/right/list" component={RoleList} />
      <Redirect path="/" from="/" to="/home" exact />
      <Route path="*" component={Not404} />
    </Switch>
  );
}

export default NewRouter


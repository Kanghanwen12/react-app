import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import HomeList from "./home/home";
import RoleList from "./right-manage/right/list";
import List from "./user-manage/list";
import Not404 from "./404/not";
import FormDemo from "./user-manage/formList/list";


// const routerAddress = {
//   '/home': HomeList,
//   '/right-manage/right/list': RoleList,
// }

const NewRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={HomeList} />
      <Route path="/right-manage/right/list" component={RoleList} />
      <Route path="/user-manage/list" component={List} />
      <Route path="/user-manage/formList/list/" component={FormDemo} />
      <Redirect path="/" from="/" to="/home" exact />
      <Route path="*" component={Not404} />
    </Switch>
  );
}

export default NewRouter


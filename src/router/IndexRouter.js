import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import Sandbox from '../views/sandbox/sandbox'

export default function IndexRouter() {
  // 6.0写法
    // <HashRouter>˝
    //   <Routes>
    //   <Route path="/login" element={<Login/>}/>
    //   <Route path="/" element={<Sandbox />}/>
    //   </Routes>
    // </HashRouter>
  return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/" component={Sandbox} /> */}
          <Route path="/" render={()=>
            // <Sandbox></Sandbox>
             localStorage.getItem('tonken') ? <Sandbox></Sandbox> : <Login></Login>
          }/>
        </Switch>
      </HashRouter>
  );
}

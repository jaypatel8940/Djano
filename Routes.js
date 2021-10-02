import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Signup from './user/signup'
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/login";
import Cart from "./core/Cart";


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signin' exact component={Signup}/>
                <Route path='/login' exact component={Signin}/>
                <Route path='/cart' exact component={Cart}/>
                  <PrivateRoutes path='/user/' exact component={UserDashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

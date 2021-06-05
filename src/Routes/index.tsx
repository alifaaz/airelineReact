import React, { FC, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFound from "../Components/NotFound"
import Login from "../Containers/Auth"
import Flights from "../Containers/Flights"
import PrivateRoute from "../HOC/PrivateRoute"
import { FlightPath, HomePath, LoginPath } from "./constants"


const Routes:FC<{}> = ({}) => {
   

    return (
        <BrowserRouter>
            <Switch>
                <Route path={LoginPath} component={Login} />
                <PrivateRoute isAuth={true} path={FlightPath} component={Flights} />
                <PrivateRoute isAuth={true} path={HomePath} component={Flights} exact />
                <Route component={NotFound} />
            </Switch>  
        </BrowserRouter>
    )
}


export default Routes
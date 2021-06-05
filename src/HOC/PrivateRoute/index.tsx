import React, { FC, useEffect }    from "react"
import { Redirect }     from "react-router"
import { Route }        from "react-router-dom"
import { LoginPath }    from "../../Routes/constants"
import connected        from "./connects"
import { Props }        from "./types"



const PrivateRoute:FC<Props> = ({
    path,
    component,
    isAuth,
    exact,
    checkAuthAction
}) => {
useEffect(()=>{
    if(isAuth){
        checkAuthAction()
    }
},[path])
    return (
        isAuth? <Route path={path} component={component}  exact={exact}/>:<Redirect to={LoginPath} />
    )
}


export default connected(PrivateRoute)
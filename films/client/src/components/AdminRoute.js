import React from "react"
import {Route, Redirect} from "react-router-dom"

const AdminRoute = ({user, render, path}) => {
    return (
        <>
            {user.token && user.role === "admin" ? (
                <Route path={path} render={props=>render(props)} />
            ) : (
                <Route path={path} render={() => <Redirect to="/films" />} />
            )}
        </>
    )
}

export default AdminRoute

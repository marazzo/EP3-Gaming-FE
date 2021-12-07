import React from 'react'
import { Route, Navigate } from 'react-router-dom'


export const ProtectedRoute = ({ isAuth: isAuth, element: Component, ...rest }) => {

  return (
    <Route {...rest} render={(props)=> {
      if(isAuth){
        return <Component />
      } else {
        return (
        <Navigate to={{pathname: '/', state: {from: props.location}}}/>
        )
      }
    }}
    />
  )
}
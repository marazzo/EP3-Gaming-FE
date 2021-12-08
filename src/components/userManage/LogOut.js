import { Button, Link } from "@material-ui/core";
import React, { useEffect, useState } from 'react';

const callApi = async () => {
    const url = '/logout';
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };
    const res = await fetch(url, options);
    const response = res.status
    console.log(response)
}

export const LogOut = ({loggedIn, setLoggedIn}) => {
  console.log(loggedIn)

  const handleClick = () => {
    callApi();
    setLoggedIn(false)
  }

  return (
    <div>
    { loggedIn ? <Button type="submit" onClick={handleClick}>Log Out</Button> : <Button component={Link} to="/scoreboard" >Log in</Button>
    }
    </div>
  )
}
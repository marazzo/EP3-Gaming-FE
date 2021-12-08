import { Link } from "@material-ui/core";
import React from 'react';
import { HomePage } from "../HomePage";


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

export const LogOut = () => {

  return (
    <Link to='/' element={<HomePage />} onClick={callApi}>Log Out</Link>

  )
}
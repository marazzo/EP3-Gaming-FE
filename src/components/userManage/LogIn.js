import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

export const LogIn = ({loggedIn, setLoggedIn}) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI(username, password, setLoggedIn);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="filled"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      { !loggedIn ?
      <div>
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </div> :
      <div>
        <Button type="submit" component={Link} to="/scoreboard"  variant="contained" color="primary">
          Continue
        </Button>
      </div>
      }
    </form>
  );
};

const callAPI = (username, password, setLoggedIn) => {
  
  const user = { username: username, password: password };
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(user),
  };
  fetch("/login", options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if(data.success === true){
        setLoggedIn(true)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default LogIn;

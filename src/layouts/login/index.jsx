import React from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { auth, provider } from "../../server";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../../store/stateProvider";
import { actionTypes } from "../../store/stateProvider/reducer";

const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = (e) => {
        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch ((error) => {
            alert(error.message);
        })
    }


  return (
    <div className="login">
      <div className="login_container">
        <img src="https://www.cdnlogo.com/logos/s/40/slack-new.svg" alt="" />
        <h1>Sign in to Slack Clone</h1>
        <p>Nazim.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;

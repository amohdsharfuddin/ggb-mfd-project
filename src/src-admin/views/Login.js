/* global google */
import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";

import './Login.css';

const Login = (props) => {
  
  console.log("[Login] "+sessionStorage.getItem('email'));

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [other, setOther] = useState(null);

  const onOneTapSignedIn = (response) => {
    console.log("Prompt onOneTapSignedIn");
    let userInfo   = {};
    let profileObj = response.profileObj;
    userInfo.name  = profileObj.name;
    userInfo.email = profileObj.email;

    if (userInfo.email === 'athirahsn.hassan@gmail.com') {
      setUserInfo({...userInfo});
      sessionStorage.setItem("email",userInfo.email);
    } else {
      setUserInfo({...userInfo});
      setIsSignedIn(true);
      console.log("[Login]Unauthorized access attempted by " + userInfo.name + "(" + userInfo.email + ")");
      window.alert("Your account is not authorized to access this page.")
      window.location.reload();
    }
  };

  const onSuccess = (res) => {
    let userInfo   = {};
    let profileObj = res.profileObj;
    userInfo.name  = profileObj.name;
    userInfo.email = profileObj.email;

    if (userInfo.email === 'athirahsn.hassan@gmail.com') {
      setUserInfo({...userInfo});
      sessionStorage.setItem("email",userInfo.email);
      const redirect = window.location.protocol + "//" + window.location.host + "/admin/home";
      window.location.assign(redirect);
    } else {
      setUserInfo({...userInfo});
      setIsSignedIn(true);
      console.log("[Login]Unauthorized access attempted by " + userInfo.name + "(" + userInfo.email + ")");
      window.alert("Your account is not authorized to access this page.")
      window.location.reload();
    }
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  
  function loadGoogleButton() {
    return(
      <GoogleLogin
        clientId="140281256136-sn8u0oviifv4smqdo1meltjv4n58bjrf.apps.googleusercontent.com"
        // uxMode="redirect"
        onSuccess={onSuccess}
        cookiePolicy={"single_host_origin"}
        //isSignedIn={true}
        theme="dark"
        onFailure={onFailure}
        buttonText="Sign in your account with Google"
      />
    );
  };

  useEffect(() => {
    window.onGoogleLibraryLoad = () => {
      google.accounts.id.initialize({
        client_id: "140281256136-sn8u0oviifv4smqdo1meltjv4n58bjrf.apps.googleusercontent.com",
        cancel_on_tap_outside: false,
        callback: onOneTapSignedIn,
      });
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          console.log(notification.getNotDisplayedReason());
          setOther(1);
        } else if (notification.isSkippedMoment()) {
          console.log(notification.getSkippedReason());
          setOther(1);
        } else if (notification.isDismissedMoment()) {
          console.log(notification.getDismissedReason());
        } else {
          setOther(0);
        }
      });
      google.accounts.id.renderButton({
        type: "standard",
        client_id: "140281256136-sn8u0oviifv4smqdo1meltjv4n58bjrf.apps.googleusercontent.com",
        cancel_on_tap_outside: false,
        prompt_parent_id: "g_id_onload",
      });
    };
  });
  
  return (
    <div>
      <div id="LoginGoogle">
          {other === 1 ? 
          <div>
            {isSignedIn ? 
            <div>
              {userInfo.email === 'athirahsn.hassan@gmail.com' ?""
                :""
              }
            </div>
            :<div>
                <div id="h1"><br/><br/><br/>
                  <h1>BIM Sign Bank Administrative</h1>
                </div>
                <center>{loadGoogleButton()}</center>
              </div>
            }
          </div>
          :<div>
            <div id="h1"><br/><br/><br/>
              <h1>BIM Sign Bank Administrative</h1>
            </div>
            <center>{loadGoogleButton()}</center>
          </div>
          }
      </div>
   </div>
);
};

export default Login;
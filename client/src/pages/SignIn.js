import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { postUser } from "../api/users";

const baseUrl = "localhost:5000";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

const SignInContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SignInCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function SignIn() {
  const handleClick = async () => {
    await auth.currentUser.getIdToken().then((result) => console.log(result));
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user) {
          alert("Authentication with Google is successful");
          if (result.additionalUserInfo.isNewUser) {
            alert("This is a new user");
            const { uid, displayName, email } = result.user;
            const newUser = {
              idUsers: uid,
              displayName: displayName,
              email: email,
              authProvider: "google",
            };
            postUser(newUser);
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert("Authentication with Google is unsuccessful");
      });
  };

  return (
    <SignInContainer>
      <SignInCard>
        <Typography variant="h4" gutterBottom>
          Connections App
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={signInWithGoogle}
          startIcon={
            <img src="/google-icon.svg" alt="Google logo" width="24" />
          }
        >
          Sign in with Google
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          startIcon={
            <img src="/google-icon.svg" alt="Google logo" width="24" />
          }
        >
          Check Current User
        </Button>
      </SignInCard>
    </SignInContainer>
  );
}

export default SignIn;

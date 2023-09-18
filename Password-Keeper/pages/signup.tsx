import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormGroup,
  Modal,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "@/components/navbar";
import axios, { Axios, AxiosError } from "axios";
import { useRouter } from 'next/router';


const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [emailHelperText, setEmailHelperText] = useState(
    "Please Enter Valid Email"
  );
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [errorText, setErrorText] = useState("");
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState(false);
  const isPasswordValid = (password: string): boolean => {
    // Check if password length is at least 6 characters
    if (password.length < 6) {
      setPasswordHelperText("Password must have at least 6 characters");
      return false;
    }

    // Check for at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setPasswordHelperText(
        "Password must have at least one special character"
      );
      return false;
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
      setPasswordHelperText("Password must have at least one number");
      return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      setPasswordHelperText("Password must have at least one uppercase letter");
      return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setPasswordHelperText("Password must have at least one lowercase letter");
      return false;
    }

    return true;
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!isEmailValid(email)) {
      setInvalidEmail(true);
    }

    if (!isPasswordValid(password)) {
      setInvalidPassword(true);
    }  


    if(invalidEmail==false&&invalidPassword==false)
    {

      const url =
        "https://proxy-https.vercel.app/secret-app-authentication/createAccount";

      const requestBody = {
        email: email,
        password: password,
        subscription: "PREMIUM",
      };

      const config = {
        method: "post",
        url: url,
        data: requestBody,
      };

      try {
        setShowSpinner(true);
        const response = await axios(config);
        console.log("Response:", response.data);
        router.push('/afterSignup')
      } catch (error: any) {
        setShowSpinner(false);
        setOpen(true);
        console.error("Error:", error);
        setErrorText((error.response.data.message));
      }
    }
    
  };
  const handleEmailFocus = () => {
    setInvalidEmail(false);
  };
  const handlePasswordFocus = () => {
    setInvalidPassword(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="h-screen bg-teal-100">
        <NavBar />
        <div className="justify-center mt-40 items-center">
          <Container maxWidth="xs">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "serif",
                color: "purple",
              }}
            >
              Sign-up
            </Typography>

            <FormGroup>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                inputRef={emailInputRef}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleEmailFocus}
                helperText={invalidEmail && emailHelperText}
                error={invalidEmail}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                inputRef={passwordInputRef}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handlePasswordFocus}
                helperText={invalidPassword && passwordHelperText}
                error={invalidPassword}
              />
            </FormGroup>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleLogin}
            >
              <p className="m-0 p-0 font-extrabold">Sign-up</p>
            </Button>
            <div className="flex justify-center">
              {showSpinner && <CircularProgress />}
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={style}>
                <p id="parent-modal-description" className="text-red-700">
                  {errorText}
                </p>
              </Box>
            </Modal>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Signup;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

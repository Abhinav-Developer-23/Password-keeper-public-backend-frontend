import * as React from "react";
import { useRouter } from "next/router";
import AuthNavBar from "@/components/authNavbar";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

import {
  TextField,
  Button,
  Container,
  Typography,
  FormGroup,
  Modal,
  Box,
  Snackbar
} from "@mui/material";
import axios, { Axios, AxiosError } from "axios";

export function SavePassword() {
  const router = useRouter();

  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar,setOpenSnackbar]=useState(false);
  const [snackbarText,setsnackbarText]=useState("")

  const handleSnackbarCLose=()=>{
    setOpenSnackbar(false)

  }

  const handleLogin = async () => {
    if (!password) {
      setsnackbarText("Password must not be empty");
      setOpenSnackbar(true);
    } else if (!key) {
      setsnackbarText("Key must not be empty");
      setOpenSnackbar(true);
    } else {
      const url =
        "https://proxy-https.vercel.app/secret-app-authentication/savePassword";
    

        const jwtToken=Cookies.get("password-keeper-storage");
        const jwtkey=JSON.parse(jwtToken as string);
        console.log("Value of token is ",jwtkey.token);

      const requestBody = {
        email: localStorage.getItem("email"),
        title:key,
        password: password,
      };

      const config = {
        method: "post",
        url: url,
        data: requestBody,
        headers: {
          Authorization: `Bearer ${jwtkey.token}`,
        }
      };

      try {
        const response = await axios(config);
        console.log("Response:", response.data);
        setsnackbarText('Password saved Successfully');
        setOpenSnackbar(true);
      
      } catch (error: any) {
        setsnackbarText('Some Error Occurred');
        setOpenSnackbar(true);
        console.error("Error:", error);
       
      }
    }
  };

  return (
    <>
      <div className="bg-teal-200 h-screen">
        <AuthNavBar />
        <div className="justify-center mt-60 items-center">
          <div className="text-center text-purple-600 font-mono">
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                sx={{ margin: "15px" }}
                label="Title"
                variant="outlined"
                margin="normal"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <TextField
                sx={{ margin: "15px" }}
                label="Password"
                variant="outlined"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="outlined"
                color="secondary"
                sx={{ margin: "15px" }}
                onClick={handleLogin}
              >
                <p className="m-0 p-0 font-extrabold">Save Password</p>
              </Button>
            </FormGroup>
            <Snackbar
           
           
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={handleSnackbarCLose}
              message={snackbarText}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center', 
              }}
           
              
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SavePassword;

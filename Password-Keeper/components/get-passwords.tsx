import React, { useState, useEffect } from "react";
import AuthNavBar from "@/components/authNavbar";
import PasswordItem from "@/components/passwordItem";
import Cookies from "js-cookie";
import axios from "axios"; // Import axios without { Axios, AxiosError }

import {
  TextField,
  Button,
  Container,
  Typography,
  FormGroup,
  Modal,
  Box,
} from "@mui/material";

export default function GetPasswords() {
  const [alphabetArray, setAlphabetArray] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = useState('');

  const url =
    "https://proxy-https.vercel.app/secret-app-authentication/getAllTitles";

  const jwtToken = Cookies.get("password-keeper-storage");
  const jwtkey = JSON.parse(jwtToken as string);
  console.log("Value of token is ", jwtkey.token);
  const requestBody = {
    email: localStorage.getItem("email"),
  };

  const config = {
    method: "POST",
    url: url,
    data: requestBody,
    headers: {
      Authorization: `Bearer ${jwtkey.token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function name() {
      try {
        console.log("Request made is ", JSON.stringify(config));
        const response = await axios(config);
        // Handle the response data as needed
        console.log("Response data:", response.data);

        // Assuming the response data is an array, update the state with the fetched data
        setAlphabetArray(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    name();
  },);

  const onTitleClickHandler=async (title:string)=>
  {
    
    console.log("String received is ",title);

    const url =
    "https://proxy-https.vercel.app/secret-app-authentication/getPasswordByEmailAndTitle";

  const jwtToken = Cookies.get("password-keeper-storage");
  const jwtkey = JSON.parse(jwtToken as string);
  console.log("Value of token is ", jwtkey.token);
  const requestBody = {
    title: title,
  };

  const config = {
    method: "POST",
    url: url,
    data: requestBody,
    headers: {
      Authorization: `Bearer ${jwtkey.token}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  setTitle(response.data);
    setOpen(true);

  }

  return (
    <div className="bg-teal-200 h-screen">
      <AuthNavBar />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <p id="parent-modal-description" className="text-red-700">
            {title}
          </p>
        </Box>
      </Modal>
      {alphabetArray.map((item, index) => (
        <PasswordItem itemName={item} key={index}  onTitleClick={onTitleClickHandler}/>
      ))}
    </div>
  );
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
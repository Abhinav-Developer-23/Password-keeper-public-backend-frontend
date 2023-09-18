import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  ButtonGroup,
} from "@mui/material";
import PasswordKeeperIcon from "@/resources/password.png";
import Image from "next/image";
import { lime, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";
function NavBar() {
  const router = useRouter();
  const handleSignupOnClick = () => {
    router.push("/signup");
  };
  const handleLoginOnClick = () => {
    router.push("/login");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#ffff66" }}>
          <div className="px-4">
            <Image
              src={PasswordKeeperIcon}
              width={40}
              height={30}
              alt="Picture of the author"
            />
          </div>
          <Typography
            component="div"
            sx={{
              color: "#0091ff",
              fontWeight: "bold",
              fontFamily: "Courier New",
              fontStyle: "italic",
              fontSize: "35px",
            }}
          >
            Password-Keeper
          </Typography>

          <Button sx={{ paddingX: "15px", margin: 0 }} onClick = { handleLoginOnClick }>
            <Typography
              variant="body1"
              sx={{
                padding: "3px",
                margin: 0,
                fontSize: "16px",
                fontFamily: "Roboto",
                fontWeight: "bold",
               
              }}
            >
              Login
            </Typography>
          </Button>
          <Button sx={{ paddingX: "15px", margin: 0 }} onClick = { handleSignupOnClick }>
            <Typography
              variant="body1"
              sx={{
                padding: "3px",
                margin: 0,
                fontSize: "16px",
                fontFamily: "Roboto",
                fontWeight: "bold",
                
              }}
            >
              Sign-up
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;

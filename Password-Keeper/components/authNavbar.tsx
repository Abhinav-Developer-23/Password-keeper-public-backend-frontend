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
  const handleGetPasswordOnClick = () => {
    router.push("/password-keeper/get-passwords");
  };
  const handleSavePasswordClick = () => {
    router.push("/password-keeper/save-password");
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

          <Button sx={{ paddingX: "15px", margin: 0 }} onClick = { handleSavePasswordClick }>
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
              Save Password
            </Typography>
          </Button>
          <Button sx={{ paddingX: "15px", margin: 0 }} onClick = { handleGetPasswordOnClick }>
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
              Get Password
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;

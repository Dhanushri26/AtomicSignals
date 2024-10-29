import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Background from "../../assets/Group 106223.svg";
import { useNavigate } from "react-router-dom";
import Icon from "../../assets/Group 4989.svg";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgotPassword");
  };
  const handleLogin =() =>{
    navigate("/dashboard");
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#EFEEFB",
      backgroundImage: `url(${Background})`,
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      opacity: 1,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    Login: {
      height: "23rem",
      width: "28%",
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      padding: "1rem",
      pt: "2rem",
    },
    head: {
      fontSize: "1.2rem",
      color: "black",
      mt: "1rem",
      ml: 2,
      fontFamily: "Poppins, sans-serif",
      fontWeight: "600",
    },
    text: {
      color: "#71707E",
      ml: 2,
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.875rem",
      mb: "1rem",
      width: "92%",
    },
    field1: {
      "& .MuiInputBase-root": {
        padding: "4px",
        fontSize: "0.875rem",
        height: "35px",
        width: "95%",
        border: "1px solid #EBEBEB",
      },
      "& .MuiInputBase-input": {
        fontWeight: "500",
        fontFamily: "Poppins, sans-serif",
      },

      display: "block",
      ml: 2,
      
    },
    field2: {
      "& .MuiInputBase-root": {
        padding: "4px",
        fontSize: "0.875rem",
        height: "35px",
        width: "95%",
        border: "1px solid #EBEBEB",
      },
      "& .MuiInputBase-input": {
        fontWeight: "500",
        fontFamily: "Poppins, sans-serif",
        '&::placeholder': {
          color:'black',
          opacity: 1
        },
      },
      
      display: "block",
      ml: 2,
    },
    detail1: {
      m: 1,
      ml: 2.3,
      fontFamily: "Poppins, sans-serif",
      color: "#71707E",
    },
    detail2: {
      m: 1,
      backgroundColor: "#49C792",
      width: "90.5%",
      ml: 2,
      textAlign: "center",
      color: "white",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      mb:1
    },
    sign: {
      backgroundColor: "#F8F8F8",
      height: "2.5rem",
      m: 2,
      width: "85%",
      boxShadow: "none",
      color: "#353448",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      gap: 1,
      borderRadius: "4px",
      "&:hover": {
        boxShadow: "none",
      },
    },
    account: {
      display: "flex",
      justifyContent: "end",
      m: 1,
      width: "92%",
      mt: "1rem",
    },
    account2: {
      textDecoration: "underline",
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.875rem",
      ml: 1,
      pr: "-2rem",
      cursor: "pointer",
    },
    iconbox: {
      width: "100%",
      pl: "1rem",
      fontFamily: "Poppins, sans-serif",
    },
    show: {
      mr: "1rem",
    },
  };
  return (
    <Box sx={styles.container}>
      <Card sx={styles.Login}>
        <Box sx={styles.iconbox}>
          <Box component="img" src={Icon} alt="icon" style={styles.icon} />
        </Box>
        <Typography sx={styles.head}>Welcome !</Typography>
        <Typography sx={styles.text}>
          One positive feedback per day or week can make us grow exponentially
        </Typography>

        <Typography sx={styles.detail1}>Email</Typography>
        <TextField sx={styles.field1} required  placeholder="atomicsignals@gmail.com"/>
        <Typography sx={styles.detail1}>Password</Typography>
        <TextField
          sx={styles.field2}
          required
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={styles.show}>
                <IconButton
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={styles.account}>
          <Typography sx={styles.account2} onClick={handleForgotPassword}>
            Forgot Password?
          </Typography>
        </Box>
        <Button sx={styles.detail2} onClick={handleLogin}>Log in</Button>
      </Card>
    </Box>
  );
};

export default Login;

import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import Background from "../../assets/Group 106223.svg";
import { useNavigate } from "react-router-dom";
import Icon from "../../assets/Group 4989.svg";
import Google from "../../assets/icons8-google.svg";
import Outlook from "../../assets/icons8-outlook.svg";
const SignUp = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
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
    signup: {
      height: "28rem",
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
      width:'90%'
    },
    field: {
      "& .MuiInputBase-root": {
        padding: "4px",
        fontSize: "0.875rem",
        height: "35px",
        width: "94%",
        border: "1px solid #EBEBEB",
      },
      display: "block",
      ml: 2,
      '& .MuiInputBase-input': {
          fontWeight:'500',
          fontFamily:'Poppins, sans-serif',
        }
      
    },
    detail1: {
      m: 1,
      ml: 2.3,
      fontFamily: "Poppins, sans-serif",
      mt:2,
      color:'#71707E',
      fontSize:'0.875rem'
    },
    detail2: {
      m: 1,
      backgroundColor: "#49C792",
      width: "89.5%",
      ml: 2,
      textAlign: "center",
      color: "white",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      mt:2
    },
    sign: {
      backgroundColor: "#F8F8F8",
      height: "2.5rem",
      m: 2,
      width: "90%",
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
      justifyContent: "center",
      m: 1,
      width: "80%",
      textAlign: "center",
    },
    account1: {
      ml: 4,
      fontFamily: "Poppins, sans-serif",
      color: "#71707E",
      fontSize: "0.875rem",
    },
    account2: {
      textDecoration: "underline",
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.875rem",
      ml: 1,
      cursor: "pointer",
    },
    divide: {
      width: "80%",
      ml: 5,
      fontFamily: "Poppins, sans-serif",
      color: "#71707E",
    },

    option: {
      height: "1.2rem",
      mr: 1,
    },
    optiontext: {
      fontFamily: "Poppins, sans-serif",
      flexGrow: 1,
      textAlign: "center",
    },

    iconbox: {
      width: "100%",
      pl: "1rem",
      fontFamily: "Poppins, sans-serif",
    },
    star:{
      color:'red',
      pl:'5px'
    }
  };
  return (
    <Box sx={styles.container}>
      <Card sx={styles.signup}>
        <Box sx={styles.iconbox}>
          <Box component="img" src={Icon} alt="icon" style={styles.icon} />
        </Box>
        <Typography sx={styles.head}>Sign Up</Typography>
        <Typography sx={styles.text}>
          You&apos;re just a few details away to set up a culture of feedback
          and thriving environment
        </Typography>
        <Button variant="contained" sx={styles.sign}>
          <Box sx={styles.option} component="img" src={Google} alt="google" />
          <Box component="span" sx={styles.optiontext}>
            Sign Up with Google
          </Box>
        </Button>
        <Button variant="contained" sx={styles.sign}>
          <Box sx={styles.option} component="img" src={Outlook} alt="outlook" />
          <Box component="span" sx={styles.optiontext}>
            {" "}
            Sign Up with Outlook
          </Box>
        </Button>
        <Divider sx={styles.divide}>or</Divider>
        <Typography sx={styles.detail1}>Work Email<span style={styles.star}>*</span></Typography>
        <TextField sx={styles.field} required placeholder="atomicsignals@gmail.com"/>

        <Button sx={styles.detail2} >
          Sign Up
        </Button>
        <Box sx={styles.account}>
          <Typography sx={styles.account1}>Already have an account?</Typography>
          <Typography sx={styles.account2} onClick={handleLogin}>Log in</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;

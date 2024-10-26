import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Background from "../../assets/Group 106223.svg";
import { useNavigate } from "react-router-dom";
import Icon from "../../assets/Group 4989.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/resetPassword");
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
    ForgotPassword: {
      height: "20rem",
      width: "27%",
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      padding: "1rem",
      pt: "2rem",
      pr:'-0.5rem'

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
      width:'98%'
    },
    field1: {
      "& .MuiInputBase-root": {
        padding: "4px",
        fontSize: "0.875rem",
        height: "35px",
        width: "93%",
        border: "1px solid #EBEBEB",
      },
      "& .MuiInputBase-input": {
        fontWeight: "500",
        fontFamily: "Poppins, sans-serif",
        
      },
      display: "block",
      ml: 2,
      mb:2
    },
    
    detail1: {
      m: 1,
      ml: 2.3,
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.875rem",
    },
    detail2: {
      m: 1,
      backgroundColor: "#49C792",
      width: "88%",
      ml: 2,
      textAlign: "center",
      color: "white",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
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
      justifyContent: "center",
      m: 1,
      width: "80%",
      textAlign: "center",
      pt:2.3
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
    iconbox: {
      width: "100%",
      pl: "1rem",
      fontFamily: "Poppins, sans-serif",
    },
  };
  return (
    <Box sx={styles.container}>
      <Card sx={styles.ForgotPassword}>
        <Box sx={styles.iconbox}>
          <Box component="img" src={Icon} alt="icon" style={styles.icon} />
        </Box>
        <Typography sx={styles.head}>Forgot Password</Typography>
        <Typography sx={styles.text}>
        Provide us the registered email to reset your password.
                </Typography>

        <Typography sx={styles.detail1}>Email</Typography>
        <TextField sx={styles.field1} required placeholder="atomicSignals@gmail.com" />
        
       
        <Button sx={styles.detail2} onClick={handleResetPassword}>Get Link</Button>

        <Box sx={styles.account}>
          <Typography sx={styles.account1}>Remember the password?</Typography>
          <Typography sx={styles.account2} >Log in</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default ForgotPassword;

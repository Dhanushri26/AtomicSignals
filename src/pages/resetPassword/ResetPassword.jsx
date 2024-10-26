import { Box, Button, Card, TextField, Typography ,Snackbar, Divider} from "@mui/material";
import Background from "../../assets/Group 106223.svg";
import { useNavigate } from "react-router-dom";
import Icon from "../../assets/Group 4989.svg";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState ,useEffect} from "react";
import CloseIcon from "@mui/icons-material/Close";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const [showPassword, setShowPassword] = useState(false);
  const[snackOpen,setSnackOpen]=useState(true);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setSnackOpen(false), 10000); 
    return () => clearTimeout(timer);
  }, []);

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
    ResetPassword: {
      height: "21rem",
      width: "27%",
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
      width:'93%'
    },
    
    field2: {
      "& .MuiInputBase-root": {
        padding: "4px",
        fontSize: "0.875rem",
        height: "35px",
        width: "94%",
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
      fontSize: "0.775rem",
      
    },
    detail2: {
      m: 1,
      backgroundColor: "#49C792",
      width: "89%",
      ml: 2,
      textAlign: "center",
      color: "white",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      mt:3
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
      width: "87%",
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
    star:{
      color:'red',
      ml:1
    },
    snack: {
      top:'-60%',
      left:'-10%',
      right:'10%',
      ml:'-1rem',
      width: "100%",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.875rem",

      "& .MuiSnackbarContent-root": {
        backgroundColor: "#CEF3E4", 
        color: "black",           
        border: "1px solid #7FDCA4", 
        borderRadius: "12px",        
        px: 2,  
        width:'5%',
      }
  
      

    },
  };
  return (
    <Box sx={styles.container}>
       <Snackbar
      open={snackOpen}
      onClose={handleSnackClose}
      message="Link sent to registered email"
      autoHideDuration={10000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={styles.snack}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={handleSnackClose}
          sx={{ ml: 0.5 }}
        ><Divider orientation="vertical"></Divider>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
      <Card sx={styles.ResetPassword}>
        <Box sx={styles.iconbox}>
          <Box component="img" src={Icon} alt="icon" style={styles.icon} />
        </Box>
        <Typography sx={styles.head}>Reset Password</Typography>
        <Typography sx={styles.text}>
        Please provide a new password for your account
                </Typography>

        <Typography sx={styles.detail1}>New Password<span style={styles.star}>*</span></Typography>
        <TextField  sx={styles.field2}
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
          }}/>
        <Typography sx={styles.detail1}>Confirm new Password<span style={styles.star}>*</span></Typography>
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
        
        <Button sx={styles.detail2} onClick={handleLogin}>Reset Password</Button>
      </Card>
    </Box>
  );
};

export default ResetPassword;

import { Box, IconButton, Typography, Divider } from "@mui/material";
import TeamIcon from "../../assets/icons/teampageicons/TopIcon";
import PersonIcon from "../../assets/icons/teampageicons/PersonIcon";
import TeamsIcon from "../../assets/icons/teampageicons/TeamsIcon";
import CommentsIcon from "../../assets/icons/teampageicons/CommentsIcon";
import SettingsIcon from "../../assets/icons/teampageicons/SettingsIcon";
import LogoutIcon from "../../assets/icons/teampageicons/Logout";
import NotifyIcon from "../../assets/icons/teampageicons/Notify";
const Sidebar = () => {
  const styles = {
    sidebar: {
      width: "5%",
      backgroundColor: "#1B1558",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100vh",
    },
    icon: {
      height: "1rem",
      margin: "1rem 0rem 0rem 0.8rem",
    },
    team: {
      height: "2rem",
      width: "2rem",
      backgroundColor: "#30287E",
      margin: "1rem",
      mb: 0,
      borderRadius: "0",
    },
    section: {
      height: "2rem",
      width: "2rem",
      backgroundColor: "#8ddcba",
      margin: "1rem",
      mb: 0,
      borderRadius: "0",
    },
    label: {
      color: "white",
      fontSize: "0.6rem",
      // margin: "1rem",
      ml: 2.2,
      mt: 0.2,
      fontFamily: "Poppins",
    },
    label1: {
      color: "white",
      fontSize: "0.6rem",
      margin: "0.7rem 0.2rem 0rem 1rem",
      fontFamily: "Poppins",
    },
    label2: {
      color: "white",
      fontSize: "0.6rem",
      margin: "0.2rem 0.2rem 0rem 0.5rem",
      fontFamily: "Poppins",
    },
    divider: {
      margin: "1rem 0.5rem 0rem 0.5rem",
      width: "2%",
      "&.MuiDivider-root": {
        backgroundColor: "white",
        width: "70%",
      },
    },
    bottom: {
      pb: "5vh",
    },
  };
  return (
    <Box sx={styles.sidebar}>
      <Box>
        <IconButton sx={styles.icon}>
          <TeamIcon />
        </IconButton>
        <Typography sx={styles.label1}>V.1.0.02</Typography>
        <Divider sx={styles.divider} />
        <IconButton sx={styles.team}>
          <PersonIcon />
        </IconButton>
        <Typography sx={styles.label}>Profile</Typography>
        <IconButton sx={styles.section}>
          <TeamsIcon />
        </IconButton>
        <Typography sx={styles.label}>Team</Typography>
        <IconButton sx={styles.team}>
          <CommentsIcon />
        </IconButton>
        <Typography sx={styles.label2}>Feedback</Typography>
      </Box>

      <Box sx={styles.bottom}>
        <IconButton sx={styles.team}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={styles.team}>
          <NotifyIcon />
        </IconButton>
        <IconButton sx={styles.team}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;

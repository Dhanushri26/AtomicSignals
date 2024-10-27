import { Box, Grid2 } from "@mui/material"
import Sidebar from "../../components/sidebar/Sidebar"
import TeamTable from "../../TeamTable"

const Team = () => {
  return (
   <Box sx={{ display: "flex" }}>
    <Grid2 sx={{ width: "5%", backgroundColor: "#1B1558" }}><Sidebar /></Grid2>
    <Grid2 sx={{ width: "95%" }}><TeamTable /></Grid2>
   </Box>
  )
}

export default Team

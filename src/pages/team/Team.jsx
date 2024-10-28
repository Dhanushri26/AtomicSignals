// import { Box, Grid2 } from "@mui/material"
import Sidebar from "../../components/sidebar/Sidebar"
import TeamTable from "../../pages/teamTable/TeamTable"

const Team = () => {
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',overflowX:'hidden'}}>
  {/* //  <Box sx={{ display: "flex" ,ScrollbarWidth:'none',mscrollbarWidth:'none',overflowX:'hidden',width:'100%',height:'100vh'}}> */}
    {/* // <Grid2 sx={{ width: "5%", backgroundColor: "#1B1558" }}> */}
      <Sidebar />
    {/* // <Grid2 sx={{ width: "95%" }}> */}
    <TeamTable />
  {/* //  </Box> */}

    </div>
  )
}

export default Team;

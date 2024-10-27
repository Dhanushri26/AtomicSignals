/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  TextField,
  IconButton,
  Button,
  Stack,
  Drawer,
  Divider,
} from "@mui/material";
import SpeedIcon from '@mui/icons-material/Speed';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import { CheckBox,  } from "@mui/icons-material";
import FilterIcon from "./assets/icons/teampageicons/FilterIcon";
import ImportIcon from "./assets/icons/teampageicons/ImportIcon";
// import Performace from './assets/good-feedback.png'

const initialTeamMembers = [
  {
    id: 1,
    name: "George Fernandes",
    designation: "Visual Designer",
    department: "Design",
    signals: ["C", "E", "T", "D", "U"],
    performance: 3,
    reportsTo: "Manager Name",
    project: "Project Alpha",
    location: "New York",
    startDate: "2023-01-15",
    email: "L5c2h@example.com",
    status: "active",
  },
  {
    id: 2,
    name: "George Fernandes",
    designation: "Visual Designer",
    department: "Design",
    signals: ["C", "E", "T", "D", "U"],
    performance: 3,
    reportsTo: "Manager Name",
    project: "Project Alpha",
    location: "New York",
    startDate: "2023-01-15",
    email: "L5c2h@example.com",
    status: "active",
  },
  {
    id: 3,
    name: "George Fernandes",
    designation: "Visual Designer",
    department: "Design",
    signals: ["C", "E", "T", "D", "U"],
    performance: 3,
    reportsTo: "Manager Name",
    project: "Project Alpha",
    location: "New York",
    startDate: "2023-01-15",
    email: "L5c2h@example.com",
    status: "active",
  },
];

const Signals = ({ signals }) => (
  <Stack direction="row" spacing={1}>
    {signals.map((signal, index) => (
      <Box
        key={index}
        width={24}
        height={24}
        bgcolor={signal === "C" ? "green" : signal === "E" ? "yellow" : "red"}
        borderRadius="50%"
      />
    ))}
  </Stack>
);

const OverallPerformance = ({ performance }) => (
  <Box
    width={40}
    height={12}
    bgcolor="lightgray"
    borderRadius={5}
    position="relative"
  >
    <Box
      width={`${performance * 33.33}%`}
      height="100%"
      bgcolor={performance > 2 ? "green" : performance === 2 ? "yellow" : "red"}
      borderRadius={5}
    />
  </Box>
);

const TeamTable = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    signals: ["C", "E", "T", "D", "U"],
    performance: 3,
    reportsTo: "",
    project: "",
    location: "",
    startDate: "",
    email: "",
    status: "active",
  });

  const handleAddMemberClick = () => {
    setFormData({
      name: "",
      designation: "",
      department: "",
      signals: ["C", "E", "T", "D", "U"],
      performance: 3,
      reportsTo: "",
      project: "",
      location: "",
      startDate: "",
    });
    setIsEditing(false);
    setIsDrawerOpen(true);
  };

  const handleEditMemberClick = (member) => {
    setFormData(member);
    setSelectedMemberId(member.id);
    setIsEditing(true);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (isEditing) {
      setTeamMembers((prev) =>
        prev.map((member) =>
          member.id === selectedMemberId ? { ...member, ...formData } : member
        )
      );
    } else {
      setTeamMembers((prev) => [
        ...prev,
        { ...formData, id: teamMembers.length + 1 },
      ]);
    }

    setIsDrawerOpen(false);
  };
  const styles = {
    teamMembers: {
      fontFamily: "Poppins",
      fontSize: "16px",
      lineHeight: "30px",
      color: "#000000",
      ml: "2.5rem",
    },
    checkBox: {
      color: "#8ddcba",
      "&.Mui-checked": {
        color: "#8ddcba",
      },
    },
    reports: {
      fontFamily: "Poppins",
      fontSize: "0.7rem",
      lineHeight: "30px",
      color: "#000000",
      ml: "0rem",
    },
    search: {
      color: "grey",
    },
    searchField: {
      width: "20rem",
      ml: "1rem",
      "& .MuiOutlinedInput-root": {
        fontFamily: "Poppins",
        fontSize: "0.7rem",
      },
    },
    filter: {
      height: "2rem",
      width: "2rem",
      backgroundColor: "#8ddcba",
      borderRadius: "4px",
      justifyContent: "center",
      alignItems: "center",
    },
    import: {
      textTransform: "none",
      fontFamily: "Poppins",
      border: "1px solid #8ddcba",
      height: "2rem",
      color: "#8ddcba",
      fontSize: "0.7rem",
    },
    addmember: {
      textTransform: "none",
      fontFamily: "Poppins",
      border: "1px solid #8ddcba",
      height: "2rem",
      backgroundColor: "#8ddcba",
      color: "#FFFFFF",
      fontSize: "0.7rem",
      paddingInline: "1rem",
    },
    stack: {
      mr: "2rem",
      mb: "0.5rem",
    },
    cell: {
      width: "100%",
      fontFamily: "Poppins",
    },
    header:{
      display: "flex", alignItems: "center", fontFamily: "Poppins" ,
      height:'5rem',
    },
    table1: {
      backgroundColor: "lightgrey",
      height: "77vh",
      width: "93.5%",
      ml: 5,
      borderRadius: "10px",
      msScrollBarWidth: "none",
      scrollbarWidth: "none",
      fontFamily: "Poppins",
    },
    feedback:{
      fontFamily: "Poppins",
      textTransform:'none',
        backgroundColor:'#8ddcba',
      color:'#FFFFFF',
      fontSize:'0.7rem',
      
    }

  };
  return (
    <Box>
      <Box sx={styles.header}>
        <Typography sx={styles.teamMembers}>Team members</Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          mt={2}
          flexGrow={1}
          sx={styles.stack}
        >
          <Box sx={{ flexGrow: 1 }} />
          <CheckBox sx={styles.checkBox} checked />
          <Typography sx={styles.reports}>Show only my reportees</Typography>
          <TextField
            placeholder="Search by name, email"
            size="small"
            InputProps={{
              startAdornment: <SearchIcon sx={styles.search} />,
            }}
            variant="outlined"
            sx={styles.searchField}
          />
          <IconButton sx={styles.filter}>
            <FilterIcon />
          </IconButton>
          <Button sx={styles.import} startIcon={<ImportIcon />}>
            Import
          </Button>
          <Button sx={styles.addmember} onClick={handleAddMemberClick}>
            Add Member
          </Button>
        </Stack>
      </Box>
      <Box
        p={1}
        display="flex"
        position="relative"
        sx={styles.table1}
        pr={0}
      >
        <TableContainer sx={{ maxHeight: "60vh", overflowX: "auto", flexGrow: 1 ,msScrollbarWidth:'none',scrollbarWidth:'none'}}>
          <Table sx={{ minWidth: 1200 ,msScrollbarWidth:'none',scrollbarWidth:'none',fontFamily: "Poppins"}} aria-label="team members table">
            <TableHead>
              <TableRow>
                {[
                  "Name",
                  "Designation",
                  "Department",
                  "Project",
                  "Location",
                  "Start Date",
                  "Signals",
                  "Overall Performance",
                  "Reports To",
                  "Email",
                  "Status",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar  sx={{ width: "2.5rem", height: "2.5rem" }} />
                      <Typography noWrap sx={{ fontFamily: "Poppins" }}>{member.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.designation}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.department}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.project}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.location}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.startDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    <Signals signals={member.signals}/>
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                     alignItems:'center',
                     justifyContent:'center',
                     justifyItems:'center',
                     marginInline:'auto',
                     paddingInline:'auto',
                     pl:'5%'
                    }}
                  >
                    {/* <OverallPerformance performance={member.performance} sx={{justifyContent:'center'}}>
                      <SpeedDialIcon/>
                      </OverallPerformance> */}
                      <SpeedIcon/>
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.reportsTo}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontFamily: "Poppins",
                    }}
                  >
                    {member.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
  sx={{
    width: 200,
    position: "sticky",
    justifyContent: "end",
    display: "flex",
    backgroundColor: "transparent",
    overflowX: 'hidden',
   
    
  }}
>
  <TableContainer sx={{ maxHeight: "120%", backgroundColor: 'transparent'}}>
    <Table aria-label="actions table" sx={{ backgroundColor: 'transparent' }}>
      <TableHead>
        <TableRow>
          <TableCell align="center" sx={{fontFamily:'Poppins'}}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {teamMembers.map((member) => (
          <TableRow key={member.id}>
            <TableCell align="end">
              <Stack direction="row" spacing={0} sx={{ justifyContent: "end" }}>
                <Button size="small" sx={styles.feedback}>
                  Add Feedback
                </Button>
                <IconButton sx={{pr:-1,mr:-2}}>
                  <EditIcon
                    onClick={() => handleEditMemberClick(member)}
                  />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>

      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ sx: { width: 300, padding: 2 } }}
      >
        <Typography variant="h6">
          {isEditing ? "Edit Member" : "Add New Member"}
        </Typography>
        <Divider sx={{ my: 2 }} />

        <TextField
          label="Name"
          fullWidth
          margin="dense"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Designation"
          fullWidth
          margin="dense"
          name="designation"
          value={formData.designation}
          onChange={handleInputChange}
        />
        <TextField
          label="Department"
          fullWidth
          margin="dense"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
        />
        <TextField
          label="Project"
          fullWidth
          margin="dense"
          name="project"
          value={formData.project}
          onChange={handleInputChange}
        />
        <TextField
          label="Location"
          fullWidth
          margin="dense"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <TextField
          label="Start Date"
          fullWidth
          margin="dense"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
        <TextField
          label="Reports To"
          fullWidth
          margin="dense"
          name="reportsTo"
          value={formData.reportsTo}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          {isEditing ? "Update Member" : "Add Member"}
        </Button>
      </Drawer>
    </Box>
  );
};

export default TeamTable;

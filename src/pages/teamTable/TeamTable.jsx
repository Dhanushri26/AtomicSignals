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
  TablePagination,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import { CheckBox, CloseOutlined } from "@mui/icons-material";
import FilterIcon from "../../assets/icons/teampageicons/FilterIcon";
import ImportIcon from "../../assets/icons/teampageicons/ImportIcon";
// import Performace from './assets/good-feedback.png';
// import { height, padding, styled, width } from "@mui/system";
// import { useTheme } from "@mui/material/styles";
import StatusSwitch from "../../components/statusSwitch/StatusSwitch";
import { useNavigate } from "react-router-dom";
import Performance from "../../assets/Neutral 0.svg";
import initialTeamMembers from './TeamTable.json';
const Signals = ({ signals }) => (
  <Stack direction="row" spacing={1}>
    {signals.map((signal, index) => (
      <Box
        key={index}
        width={24}
        height={24}
        bgcolor={
          signal === "C"
            ? "green"
            : signal === "E"
            ? "yellow"
            : signal === "T"
            ? "orange"
            : signal === "D"
            ? "red"
            : "green"
        }
        borderRadius="50%"
        color="black"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography variant="caption" color="black">
          {signal}
        </Typography>
      </Box>
    ))}
  </Stack>
);

const TeamTable = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleSelectChange = (event) => {
    handleInputChange({
      target: { name: "reportsTo", value: event.target.value },
    });
  };
  const navigate = useNavigate();
  const handleFilter = () => {
    navigate("/filter");
  };

  const handleStatusChange = (id, newStatus) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id
          ? { ...member, status: newStatus ? "active" : "deactive" }
          : member
      )
    );
  };

  const paginatedData = teamMembers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
      fontSize: "20px",
      lineHeight: "30px",
      color: "#000000",
      ml: "2.5rem",
      mt: 4,
    },
    checkBox: {
      color: "#8ddcba",
      "&.Mui-checked": {
        color: "#8ddcba",
      },
      height: "3rem",
    },
    reports: {
      fontFamily: "Poppins",
      fontSize: "0.8rem",
      lineHeight: "30px",
      color: "#000000",
      ml: -1,
    },
    search: {
      color: "grey",
    },
    searchField: {
      width: "20rem",
      ml: "1rem",
      "& .MuiOutlinedInput-root": {
        fontFamily: "Poppins",
        fontSize: "0.8rem",
      },
      height: "rem",
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
      fontSize: "0.8rem",
      paddingInline: "0.4rem",
    },
    addmember: {
      textTransform: "none",
      fontFamily: "Poppins",
      border: "1px solid #8ddcba",
      height: "2rem",
      backgroundColor: "#8ddcba",
      color: "#FFFFFF",
      fontSize: "0.8rem",
      paddingInline: "1,5rem",
    },
    stack: {
      mr: "2rem",
      mb: "0.5rem",
    },
    cell: {
      width: "100%",
      fontFamily: "Poppins",
    },
    header: {
      display: "flex",
      alignItems: "center",
      fontFamily: "Poppins",
    },
    table1: {
      backgroundColor: "#FFFFFF",
      height: "69vh",
      width: "93.5%",
      ml: 5,
      borderRadius: "10px",
      mt: 2,
      msScrollBarWidth: "none",
      scrollbarWidth: "none",
      fontFamily: "Poppins",
      borderBottomRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
    feedback: {
      fontFamily: "Poppins",
      textTransform: "none",
      backgroundColor: "#8ddcba",
      color: "#FFFFFF",
      fontSize: "0.7rem",
      mb: 0.5,
      mt: 1,
    },
    membersfields: {
      "&.Mui-InputBase-root": {
        fontFamily: "Poppins",
        fontSize: "0.5rem",
        height: "10px",
        textAlign: "center",
        justifyContent: "center",
      },
      "& .MuiInputBase-input": {
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        height: "10px",
        textAlign: "start",
      },
    },
    membersfields1: {
      "&.Mui-InputBase-root": {
        fontFamily: "Poppins",
        fontSize: "0.5rem",
        height: "10px",
        textAlign: "center",
        justifyContent: "center",
        padding: "0.5rem -1.5rem 0.5rem 0.5rem",
      },
      "& .MuiInputBase-input": {
        fontFamily: "Poppins",
        // fontSize: "0.8rem",
        // height: "10px",
        textAlign: "start",
        fontSize: "0.8rem",
        // padding:'0.5rem -1.5rem 0.5rem 0.5rem'
        padding: "0.7rem 0.7rem",
      },
    },
    membersbutton: {
      backgroundColor: "#8ddcba",
      textTransform: "none",
      fontFamily: "Poppins",
      fontSize: "0.8rem",
      color: "#FFFFFF",
      mt: 2,
      height: "2.5rem",
      width: "8rem",
    },
    drawerhead: {
      fontFamily: "Poppins",
    },
    membersbutton2: {
      color: "#8ddcba",
      backgroundColor: "white",
      textTransform: "none",
      fontFamily: "Poppins",
      fontSize: "0.8rem",
      height: "2.5rem",
      width: "8rem",
      border: "1px solid #8ddcba",
      mt: 2,
    },
    fieldtext: {
      fontFamily: "Poppins",
      fontSize: "0.8rem",
      textAlign: "start",
      // display:'none'
      mt: 1,
    },
    celltext: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontFamily: "Poppins",
    },
    tablepages: {
      "& .MuiTablePagination-displayedRows": {
        fontFamily: "Poppins",
      },
      "& .MuiTablePagination-selectLabel": {
        fontFamily: "Poppins",
      },
      "& .MuiTablePagination-select": {
        fontFamily: "Poppins",
      },
      fontFamily: "Poppins",
      mr: 5,
      backgroundColor: "white",
      width: "93.65%",
      ml: "3%",
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTop: "1px solid lightgrey",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        height: "100vh",
        width: "100vw",
        msScrollBarWidth: "none",
        scrollbarWidth: "none",
      }}
    >
      <Box sx={styles.header}>
        <Typography sx={styles.teamMembers}>Team members</Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          mt={4}
          flexGrow={1}
          sx={styles.stack}
        >
          <Box sx={{ width: "20.5%" }} />
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              flexDirection: "row",
              gap: 2,
            }}
          >
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
            <IconButton sx={styles.filter} onClick={handleFilter}>
              <FilterIcon />
            </IconButton>
            <Divider orientation="vertical" sx={{ height: "1.5rem" }} />
            <Button sx={styles.import} startIcon={<ImportIcon />}>
              Import
            </Button>
            <Button sx={styles.addmember} onClick={handleAddMemberClick}>
              Add Member
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ backgroundColor: "#f0f0f", height: "80vh", mt: 2 }}>
        <Box
          // p={1}
          display="flex"
          position="relative"
          sx={styles.table1}
          pr={0}
          mt={1}
        >
          <TableContainer
            sx={{
              maxHeight: "80vh",
              overflowX: "auto",
              msScrollbarWidth: "none",
              scrollbarWidth: "none",
              width: "80vw",
              borderRadius: "none",
            }}
          >
            <Table
              sx={{
                minWidth: 1200,
                msScrollbarWidth: "none",
                scrollbarWidth: "none",
                fontFamily: "Poppins",
              }}
              aria-label="team members table"
            >
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
                    <TableCell key={header} sx={styles.celltext}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell sx={styles.celltext}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                          sx={{ width: "2.5rem", height: "2.5rem" }}
                          alt="Profile"
                          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        />
                        <Typography
                          noWrap
                          sx={{
                            fontFamily: "Poppins",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "0.8rem",
                          }}
                        >
                          {member.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={styles.celltext}>
                      {member.designation}
                    </TableCell>
                    <TableCell sx={styles.celltext}>
                      {member.department}
                    </TableCell>
                    <TableCell sx={styles.celltext}>{member.project}</TableCell>
                    <TableCell sx={styles.celltext}>
                      {member.location}
                    </TableCell>
                    <TableCell sx={styles.celltext}>
                      {member.startDate}
                    </TableCell>
                    <TableCell sx={styles.celltext}>
                      <Signals signals={member.signals} />
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontFamily: "Poppins",
                        alignItems: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                        marginInline: "auto",
                        paddingInline: "auto",
                        pl: "3.5%",
                      }}
                    >
                      <img src={Performance} alt="Performance" />
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontFamily: "Poppins",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      <Avatar
                        sx={{ width: "2.5rem", height: "2.5rem" }}
                        alt="Profile"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                      />
                      <span
                        style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}
                      >
                        {" "}
                        {member.reportsTo}
                      </span>
                    </TableCell>
                    <TableCell sx={styles.celltext}>{member.email}</TableCell>
                    <TableCell sx={styles.celltext}>
                      <StatusSwitch
                        status={member.status === "active"}
                        onToggle={(newStatus) =>
                          handleStatusChange(member.id, newStatus)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            sx={{
              height: "100%",
              overflowX: "auto",
              flexGrow: 1,
              msScrollbarWidth: "none",
              scrollbarWidth: "none",
              width: "13vw",
              backgroundColor: "white",
              borderTopRightRadius: "10px",
              // borderBottomRightRadius: "10px",
              borderBottomRightRadius: "0px",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Table
              aria-label="actions table"
              sx={{
                msScrollbarWidth: "none",
                scrollbarWidth: "none",
                fontFamily: "Poppins",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontFamily: "Poppins" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell align="end">
                      <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          display: "flex",
                          mb: "1px",
                        }}
                      >
                        <Button size="small" sx={styles.feedback}>
                          Add Feedback
                        </Button>
                        <IconButton>
                          <EditIcon
                            sx={{
                              fontSize: "1.5rem",
                              height: "1.3rem",
                              color: "#8ddcba",
                            }}
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
          {/* </Box> */}
        </Box>
        <TablePagination
          sx={styles.tablepages}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={teamMembers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Box sx={{ position: "relative" }}>
        {isDrawerOpen && (
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              position: "fixed",
              top: 15,
              right: 400,
              zIndex: 2000,
              color: "black",
              backgroundColor: "white",
            }}
          >
            <CloseOutlined />
          </IconButton>
        )}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{ sx: { width: 350, padding: 2, overflowY: "scroll" } }}
        >
          <Typography sx={styles.drawerhead}>
            {isEditing ? "Edit Member" : "Add New Member"}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography sx={styles.fieldtext}>
            Name
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="Name"
            fullWidth
            margin="dense"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            sx={styles.membersfields}
          />
          <Typography sx={styles.fieldtext}>
            Designation
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="Designation"
            fullWidth
            margin="dense"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            sx={styles.membersfields}
          />
          <Typography sx={styles.fieldtext}>
            Department
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="Department"
            fullWidth
            margin="dense"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            sx={styles.membersfields}
          />
          <Typography sx={styles.fieldtext}>
            Project
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="project"
            fullWidth
            margin="dense"
            name="project"
            value={formData.project}
            onChange={handleInputChange}
            sx={styles.membersfields}
          />
          <Typography sx={styles.fieldtext}>
            Location
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="location"
            fullWidth
            margin="dense"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            sx={styles.membersfields}
          />
          <Typography sx={styles.fieldtext}>
            Start Date
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="Start Date"
            fullWidth
            margin="dense"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
            sx={styles.membersfields1}
          />
          <Typography sx={styles.fieldtext}>
            Reports To
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <FormControl
            fullWidth
            margin="dense"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "2.5rem",
                fontSize: "0.8rem",
                borderRadius: "5px",
                border: "1px solid #f2f2f2",
                width: "21rem",
                fontFamily: "Poppins",
                paddingRight: "2rem",
              },
              "& .MuiInputLabel-root": {
                fontSize: "0.8rem",
                fontFamily: "Poppins",
                fontWeight: "bold",
                paddingRight: "2rem",
              },
            }}
          >
            <Select
              value={formData.reportsTo || "Reports to"}
              sx={{ fontFamily: "Poppins" }}
              onChange={handleSelectChange}
              placeholder="Reports To"
            >
              {" "}
              <MenuItem value="Reports to" disabled sx={{ color: "lightgrey" }}>
                Reports to
              </MenuItem>
              <MenuItem value="Manager Name" sx={{ fontFamily: "Poppins" }}>
                Manager Name
              </MenuItem>
              <MenuItem value="George" sx={{ fontFamily: "Poppins" }}>
                George
              </MenuItem>
              <MenuItem value="Steven" sx={{ fontFamily: "Poppins" }}>
                Steven
              </MenuItem>
            </Select>
          </FormControl>
          <Typography sx={styles.fieldtext}>
            Email
            {!isEditing && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            placeholder="Email"
            fullWidth
            multiple
            margin="dense"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            sx={styles.membersfields}
          />
          <Box sx={{ display: "flex", mb: 5, justifyContent: "space-evenly" }}>
            <Button fullWidth onClick={handleSubmit} sx={styles.membersbutton}>
              {isEditing ? "Save" : "Add Member"}
            </Button>
            <Button
              fullWidth
              onClick={handleDrawerClose}
              sx={styles.membersbutton2}
            >
              {isEditing ? "Cancel" : "Cancel"}
            </Button>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default TeamTable;

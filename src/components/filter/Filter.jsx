import {
  Drawer,
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const Filter = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [selectedButtons, setSelectedButtons] = useState([1]);
  const[selectedRoles,setSelectedRoles]=useState([1]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const[designation,setDesignation]=useState('');
  const handleChange = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };
  const Departments =[
    {id:1,label:'Design'},
    {id:2,label:'Marketing'},
    {id:3,label:'Development'},
  ]
  const Designations =[
    {id :1,label:'Visual Designer'},
    {id:2,label:'Software Developer'},
    {id:3,label:'Frontend Developer'},
    {id:4,label:'Backend Developer'},
  ]
  
  const handleButtonClick = (id) => {
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((buttonId) => buttonId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  const handleRoleClick = (id) => {
    setSelectedRoles((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((buttonId) => buttonId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const navigate = useNavigate();
  const handleBack=()=>{
    navigate("/dashboard");
  }
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const Buttons =[{id: 1,label: "impactful"},{id:2,label:'Spectacular'}, {id:3,label:'Very Good'},{id:4,label:'Good'},{id:5,label:'Need to improve'},{id:6,label:'Need to improve a lot'},
{id:7,label:'Completely away'}
]
const Roles =[{id: 1,label: "Employee"},{id:2,label:'Manager'},{id:3,label:'Admin'}]
const styles={
  heading:{
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
    ml:0,
    fontFamily:'Poppins',
  },
  close: 
    {
      position: "fixed",
      top: 15,
      right: 400,
      zIndex: 2000,
      color: "black",
      backgroundColor: "white",
    },
    buttons: {
      textTransform:'none',
      fontFamily:'Poppins',
      color:'black',
      borderRadius: "5px",
      padding: "0.5rem 0.5rem",
      m:1,
      fontWeight:'semibold',
      fontSize:'0.7rem',
      border:'transparent',
      opacity:0.8

    },
    buttonbox:{
      width:'100%',
      display:'flex',
      flexWrap:'wrap'
    },
    rolebox:{
      width:'100%',
      display:'flex',
      flexWrap:'wrap',
      marginTop:'1rem'
    },
    text:{
      fontFamily:'Poppins',
      fontSize:'0.8rem',
      my:'0.5rem'
    },
    field:{
      '& .MuiOutlinedInput-root': {
        height: '2.5rem',
        fontSize: '0.8rem',
        borderRadius: '5px',
        border: '1px solid #f2f2f2',
        width:'20rem',
        fontFamily:'Poppins',
      },
      '& .MuiInputLabel-root' :{
        fontSize: '0.8rem',
        fontFamily:'Poppins',
        fontWeight:'bold'
      }
    },
    button1: {
      backgroundColor: "#8ddcba",
      textTransform: "none",
      fontFamily: "Poppins",
      fontSize: "0.8rem",
      color: "#FFFFFF",
      mt: 2,
      height: "2.5rem",
      width: "8rem",
    },
    button2: {
      color: "#8ddcba",
      backgroundColor: "white",
      textTransform: "none",
      fontFamily: "Poppins",
      fontSize: "0.8rem",
      height:'2.5rem',
      width:'8rem',
      border:'1px solid #8ddcba',
      mt:2
    },
  
}

  return (
    <Box sx={{ position: "relative" }}>
      {isDrawerOpen && (
        <Box onClick={handleBack}>
        <IconButton
          onClick={handleDrawerClose}
          sx={styles.close}
        >
          <CloseOutlined  onclick={handleBack}/>
        </IconButton>
      </Box>
      )}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: 350,
            paddingLeft: 2,
          paddingTop: 2,
            backgroundColor: "#FFFFFF",
            overflowY: "scroll",
            height: "100vh",
            mscrollbarWidth: "none",
            scrollbarWidth: "none",
            
           
          },
        }}
      ><Typography
      sx={styles.heading}
    >
      Filters
    </Typography>
    <Divider sx={{ mb: 2,ml:-2 }} />

        <Box sx={styles.buttonbox}>
          {Buttons.map((button) => (
            <Button
              key={button.id}
              sx={{
                ...styles.buttons, 
                backgroundColor: selectedButtons.includes(button.id) ? '#8ddcba' : 'white',
                border:selectedButtons.includes(button.id) ? '1px solid green' : '1px solid lightgrey'
              }}
              onClick={() => handleButtonClick(button.id)}
            >
              {button.label}
            </Button>
          ))}
        </Box>
          <Typography sx={styles.text}>Department</Typography>
          <FormControl fullWidth sx={styles.field}>
        {/* <InputLabel>Select</InputLabel> */}
        <Select
          value={selectedDepartment}
          onChange={handleChange}
          displayEmpty
          IconComponent={KeyboardArrowDown}
          renderValue={(selected) => selected || "Select"}
        >
          {Departments.map((department) => (
            <MenuItem key={department.id} value={department.label} sx={{ fontFamily:'Poppins',fontSize:'0.8rem'}}>
              {department.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
           <Typography sx={styles.text}>Designation</Typography>
           <FormControl fullWidth sx={styles.field}>
        <Select
          value={designation}
          onChange={handleDesignationChange}
          displayEmpty
          IconComponent={KeyboardArrowDown}
          renderValue={(selected) => selected || "Select"}
        >
          {Designations.map((designation) => (
            <MenuItem key={designation.id} value={designation.label} sx={{ fontFamily:'Poppins',fontSize:'0.8rem'}}>
              {designation.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <Box sx={styles.rolebox}>
          {Roles.map((role) => (
            <Button
              key={role.id}
              sx={{
                ...styles.buttons, 
                backgroundColor: selectedRoles.includes(role.id) ? '#8ddcba' : 'white',
                border:selectedRoles.includes(role.id) ? '1px solid green' : '1px solid lightgrey'
              }}
              onClick={() => handleRoleClick(role.id)}
            >
              {role.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex",  justifyContent: "space-between",mr:2,mt:'30%' }}>
          <Button sx={styles.button1}>Apply filters</Button>
          <Button sx={styles.button2}>Reset</Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Filter;

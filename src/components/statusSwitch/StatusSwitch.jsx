/* eslint-disable react/prop-types */
// StatusSwitch.jsx
import {  styled } from '@mui/system';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.success.main,
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

// Main component with the switch logic
const StatusSwitch = ({ status, onToggle }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography sx={{pl:1,fontFamily:'Poppins',fontSize:'14px'}}>{status ? 'Active' : 'Deactive'}</Typography>
      <IOSSwitch checked={status} onChange={(e) => onToggle(e.target.checked)} />
    </Stack>
  );
};

export default StatusSwitch;

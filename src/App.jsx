import './App.css'
// import SignUp from './pages/signUp/SignUp';
import RouterPaths from './routes/RouterPaths';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      main: '#4caf50',
    },
    // Add other colors if needed
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      {/* <SignUp/> */}
      <RouterPaths/>
      </ThemeProvider>
    </div>
  )
}

export default App
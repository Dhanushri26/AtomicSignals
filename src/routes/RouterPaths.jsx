import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/signUp/SignUp';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Login from '../pages/login/Login';
import ResetPassword from '../pages/resetPassword/ResetPassword';
const RouterPaths = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path='/resetPassword' element={<ResetPassword />} />
    </Routes>
  </Router>
);
  
}

export default RouterPaths
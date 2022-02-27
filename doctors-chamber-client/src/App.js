import { Route, Routes } from "react-router-dom";
import './App.css';
import AddAdmin from './components/DashboardComponents/AddAdmin/AddAdmin';
import AddDoctor from './components/DashboardComponents/AddDoctor/AddDoctor';
import DashboardHome from './components/DashboardComponents/DashboardHome/DashboardHome';
import AdminRoute from "./components/LoginComponents/AdminRoute/AdminRoute";
import Login from "./components/LoginComponents/Login/Login";
import PrivateRoute from "./components/LoginComponents/PrivateRoute/PrivateRoute";
import Register from "./components/LoginComponents/Register/Register";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from './components/Shared/Navigation/Navigation';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard" element={<DashboardHome />}></Route>
            <Route path="/dashboard/addadmin" element={<AdminRoute><AddAdmin /></AdminRoute>} />
            <Route path="/dashboard/adddoctor" element={<AdminRoute><AddDoctor /></AdminRoute>} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;

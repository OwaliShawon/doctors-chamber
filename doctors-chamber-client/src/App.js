import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/LoginComponents/Login/Login";
import Register from "./components/LoginComponents/Register/Register";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from './components/Shared/Navigation/Navigation';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from './Pages/Appointment/Appointment';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Shared/Footer/Footer";
import Navigation from './components/Shared/Navigation/Navigation';
import Appointment from './Pages/Appointment/Appointment';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

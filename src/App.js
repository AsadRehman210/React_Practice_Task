import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import { useSelector } from "react-redux";
import Logout from "./pages/Logout.jsx";


function App() {
  const token = useSelector(state => state.user.token)
  return (
    <>
      <Navbar />
      <Routes>
        {token && <Route path="/" element={<Home />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

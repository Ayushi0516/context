import { Button, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar">

      <Link to="/">Home</Link>
      <Link to="/status">Status</Link>
      <Link to="/login">Login</Link>

      <Button colorScheme="blue" onClick={handleChange}>
        {isAuth ? "Logout" : "Login"}
      </Button>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
};

export default Navbar;
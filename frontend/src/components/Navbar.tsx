import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  InputBase,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface NavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar = ({ isLoggedIn, onLogin }: NavbarProps) => {
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle cart icon click (top navbar)
  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the cart route
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Navigate to the cart route
  };

  // Function to handle cart click in Bottom Navigation
  // const handleBottomNavCartClick = () => {
  //   navigate("/cart"); // Navigate to the cart route
  // };

  return (
    <>
      {/* Top Navbar */}
      <AppBar
        position="sticky"
        sx={{ background: "#f9f5ff", color: "#000", boxShadow: 0 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 16px",
          }}
        >
          {/* Logo */}
          <Typography
            variant="h4"
            sx={{ color: "#7e22ce", fontWeight: "bold" }}
          >
            zepto
          </Typography>

          {/* Location */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "0.9rem",
              color: "#000",
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                whiteSpace: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                "@media (max-width:600px)": {
                  WebkitLineClamp: 1,
                },
              }}
            >
              Marzban Parsi Colony, Dalal Estate, Mumbai, Maharashtra, India
            </Typography>
          </Box>

          {/* Search Box */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "8px",
              padding: "4px 8px",
              maxWidth: "800px",
              width: "100%",
              boxShadow: "0 0 5px black",
            }}
          >
            <SearchIcon fontSize="small" sx={{ color: "#757575" }} />
            <InputBase
              placeholder="Search for 'apple juice'"
              sx={{ ml: 1, flex: 1, fontSize: "0.9rem" }}
            />
          </Box>

          {/* Navigation Icons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {isLoggedIn ? (
              <IconButton>
                <PersonIcon 
                onClick={handleProfileClick}
                />
              </IconButton>
            ) : (
              <Button
                onClick={onLogin}
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  color: "white",
                  backgroundColor: "DodgerBlue",
                  padding: "4px 8px",
                  boxShadow: "0 0 3px blue",
                }}
              >
                Login
              </Button>
            )}

            {/* Cart Icon with onClick for Top Navbar */}
            <IconButton onClick={handleCartClick}>
              <ShoppingCartIcon />
              <Box
                sx={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  backgroundColor: "#7e22ce",
                  color: "#fff",
                  fontSize: "0.7rem",
                  borderRadius: "50%",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                1
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Bottom Navigation for Small Screens */}
      <BottomNavigation
        value={bottomNavValue}
        onChange={(event, newValue) => setBottomNavValue(newValue)}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#fff",
          boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
        }}
      >
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          sx={{ color: bottomNavValue === 0 ? "#7e22ce" : "#757575" }}
          onClick={handleProfileClick}
        />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon />}
          sx={{ color: bottomNavValue === 1 ? "#7e22ce" : "#757575" }}
          onClick={handleCartClick} // Add onClick here
        />
      </BottomNavigation>
    </>
  );
};

export default Navbar;

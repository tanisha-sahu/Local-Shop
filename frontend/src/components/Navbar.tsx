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

interface NavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar = ({ isLoggedIn, onLogin, onLogout }: NavbarProps) => {
  const [bottomNavValue, setBottomNavValue] = useState(0);

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
              maxWidth: "200px", // Adjust width as needed
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                whiteSpace: "normal", // Allow wrapping
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical", // Vertical box orientation
                WebkitLineClamp: 2, // Default to 2 lines on large screens
                "@media (max-width:600px)": {
                  WebkitLineClamp: 1, // 1 line on small screens
                },
              }}
            >
              Marzban Parsi Colony, Dalal Estate, Mumbai, Maharashtra, India
            </Typography>
          </Box>

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

          {/* Navigation Icons (Only visible on large screens) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {isLoggedIn ? (
              <IconButton>
                <PersonIcon />
              </IconButton>
            ) : (
              <Button
                onClick={onLogin}
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  color:"white",
                  backgroundColor: "DodgerBlue",
                  padding: "4px 8px",
                  boxShadow: "0 0 3px blue",
                }}
              >
                Login
              </Button>
            )}

            <IconButton>
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
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            padding: "8px 16px",
            backgroundColor: "#f1f1f1",
          }}
        >
          {/* Full InputBox on Small Screens */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "4px 8px",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <SearchIcon fontSize="small" sx={{ color: "#757575" }} />
            <InputBase
              placeholder="Search for 'apple juice'"
              sx={{ ml: 1, flex: 1, fontSize: "0.9rem" }}
            />
          </Box>
        </Box>
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
        />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon />}
          sx={{ color: bottomNavValue === 1 ? "#7e22ce" : "#757575" }}
        />
      </BottomNavigation>
    </>
  );
};

export default Navbar;

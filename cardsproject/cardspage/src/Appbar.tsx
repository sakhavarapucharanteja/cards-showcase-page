import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Appbar: React.FC = () => {
  
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const isLoggedIn = !!userData;
  const [searchQuery, setSearchQuery] = useState('');


  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };
 
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/imgmediacard?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TECHCARDS
        </Typography>

        {isLoggedIn ? (
          <>
            <form onSubmit={handleSearch}>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ backgroundColor: "white", borderRadius: 1, mr: 2 }}
              />
            </form>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Box display="flex" gap={1}>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

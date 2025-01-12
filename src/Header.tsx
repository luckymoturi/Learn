import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50', color: 'white' }}>
      <Toolbar>
        {/* Logo */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src="/logo.png" alt="Firstbench Logo" style={{ height: '30px', marginRight: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Firstbench
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">FirstGuru</Button>
          <Button color="inherit">TownHall</Button>
          <Button color="inherit">AI Evaluation</Button>
          <Button color="inherit">Performance</Button>
          <Button color="inherit">Mock Test</Button>
        </Box>

        {/* Profile Dropdown */}
        <Box>
          <IconButton onClick={handleMenuClick} color="inherit">
            <Avatar sx={{ bgcolor: '#3498DB' }}>P</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

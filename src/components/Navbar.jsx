import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, Box, useMediaQuery, useTheme } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onMenuToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {isSmallScreen && (
            <MenuIcon onClick={onMenuToggle} style={{ color: '#000', cursor: 'pointer' }} />
          )}
          <Typography variant="h6" sx={{ color: '#000' }}>
            Exclusive
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F5F5F5', borderRadius: '4px', padding: '7px 12px' }}>
            <IconButton>
              <IoSearch />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{ borderRadius: '4px', padding: '7px 12px' }}
            />
          </Box>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <MdOutlineFavoriteBorder />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="primary">
              <MdOutlineShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      <div style={{ borderBottom: '1px solid #EDEDED' }}></div>
    </AppBar>
  );
};

export default Navbar;

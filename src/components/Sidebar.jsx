import React from 'react';
import { Drawer, List, ListItem, Typography, Box, useMediaQuery, useTheme,Divider } from '@mui/material';
import Categories from './Categories';
import Brands from './Brands';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box position='relative' display='flex'>
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        sx={{
          '& .MuiDrawer-paper': {
            width: '280px',
            top: '65px', // Adjust top margin for larger screens
          },
        }}
      >
        <List>
            <ListItem >
              <Box display='flex' flexDirection='column' gap='2px'>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>Filter</Typography>
                <Divider />
                <Categories />
              </Box>
            </ListItem>
                <Divider />
            
            <ListItem >
              <Box display='flex' flexDirection='column' gap='2px'>               
                <Brands />
              </Box>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;

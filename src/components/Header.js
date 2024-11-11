import React from 'react';
import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Divider } from "@mui/material";
import { Search } from '@mui/icons-material';

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <Search style={{ fontSize: 25, color: 'black' }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
        The Mind Managers
      </Typography>
    </div>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Link
              href="https://github.com/Dustfoxx/board-game-madness/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <GitHubIcon sx={{ fontSize: 30, color: 'black' }} />
            </Link>
          </Box>
        </Toolbar>
        <Divider></Divider>

      </AppBar>
      <Box sx={{ pt: 4, maxWidth: 'lg', mx: 'auto', px: { xs: 3, md: 5 } }}>
      </Box>
    </div>
  );
};

export default Header;

import React from 'react';
import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Project Name
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Link href="/about" color="inherit" underline="hover">
              About
            </Link>

            <Link
              href="https://github.com/your-repository" // Replace with repo link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <GitHubIcon sx={{ fontSize: 24, color: 'black' }} />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 4, maxWidth: 'lg', mx: 'auto', px: { xs: 3, md: 5 } }}>
      </Box>
    </div>
  );
};

export default Header;

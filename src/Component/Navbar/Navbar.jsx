import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import menuImage from '../../assets/image/menu.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%', 
          height: '50px', 
          backgroundImage: `url(${menuImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div style={{paddingLeft: '20px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '960px'}}>
            <img
              src='./assets/icons/uzhnu.png'
              alt="uznu"
              width='32px'
              height='32px'
            />
            <div style={{minWidth: '30px'}}></div>
            <img
                src='./assets/icons/flag.png'
                alt="flag"
                width='32px'
                height='32px'
              />
        </div>
      </div>

      {/* <AppBar position="static" sx={{ color: '#b57704', backgroundColor: 'inherit', }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            <Box sx={{padding: '10px'}}>
              <img
                src='./assets/icons/flag.png'
                alt=""
                width='32px'
                height='32px'
              />
            </Box>

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                marginLeft: '20px',
              }}
            >
              Слава УКРАЇНІ!!!
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#b57704', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color='#b57704'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar> */}
    </>
  );
}
export default ResponsiveAppBar;
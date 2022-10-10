import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  styled,
  Tabs,
  Tab,
  Toolbar,
  IconButton,
  Tooltip,
  Avatar,
  Typography,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { startCase } from 'lodash-es';
import LogoImage from '../../assets/images/mamo-pay-logo-business-white.svg';
import { MamoButton } from '../button';
import { MamoBreadcrumbs } from '../breadCrumbs';
import { ILayout } from './Layout.types';

const mobileMenuScreenWidthToShow = 260;

const Logo = styled('img')`
  width: 120px;
`;

export function Layout({ children, routes }: ILayout) {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [selectedTab, setselectedTab] = useState<number>(0);

  function MamoAvatar() {
    return (
      <>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar
              sx={{
                bgcolor: {
                  // @ts-ignore
                  md: theme.palette.primary[50],
                  // @ts-ignore
                  xs: theme.palette.primary[300],
                },
                color: {
                  md: theme.palette.primary.main,
                  xs: theme.palette.text.secondary,
                },
              }}
            >
              <Typography fontSize="12px" fontWeight="bold">
                DO
              </Typography>
            </Avatar>
          </IconButton>
        </Tooltip>
      </>
    );
  }

  const pathnames = location.pathname.split('/').filter(route => route);
  const lastPath = pathnames[pathnames.length - 1];

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(routes[newValue].path, {});
    setselectedTab(newValue);
  };

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const mobileMenuContent = (
    <Box onClick={handleMobileMenuToggle} style={{ width: '260px' }}>
      <Toolbar style={{ padding: '12px 20px' }}>
        <Logo src={LogoImage} />
      </Toolbar>
      <Divider
        style={{
          width: '100%',
          borderColor: '#FFFFFF1F',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          margin: `${theme.spacing(5)} 0 ${theme.spacing(3)}`,
        }}
      >
        <MamoButton
          variant="contained"
          color="secondary"
          size="large"
          style={{
            width: '210px',
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >
          Create payment link
        </MamoButton>
      </Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleTabsChange}
        style={{
          width: '100%',
          justifyContent: 'flex-start',
        }}
      >
        {routes.map(route => {
          const isRouteActive = route.path === lastPath;

          return (
            <Tab
              icon={route.icon}
              iconPosition="start"
              label={startCase(route.label)}
              style={{
                display: 'flex',
                width: 'calc(100% - 16px)',
                justifyContent: 'flex-start',
                margin: '0 8px',
                minHeight: '54px',
                padding: '12px 20px',
                fontSize: '10px',
                fontWeight: 'bold',
                color: theme.palette.text?.secondary,
                opacity: 1,
                borderRadius: '12px',
                backgroundColor: `${
                  // @ts-ignore
                  isRouteActive ? theme.palette.primary['400'] : 'transparent'
                }`,
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar
        elevation={0}
        sx={{
          flexShrink: 0,
          width: { md: `calc(100% - ${mobileMenuScreenWidthToShow}px)` },
          ml: { md: `${mobileMenuScreenWidthToShow}px` },
          backgroundColor: {
            md: theme.palette.background.paper,
            xs: theme.palette.primary.main,
          },
        }}
      >
        <Toolbar
          sx={{
            display: { xs: 'flex', md: 'none' },
            padding: { xs: '0 12px' },
            minHeight: { xs: '56px' },
          }}
        >
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleMobileMenuToggle}
              sx={{
                ml: { sm: 2, xs: 0 },
                mr: { sm: 2, xs: 1 },
                display: { md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Logo src={LogoImage} />
          </Box>
          <Box sx={{ flexGrow: 0, margin: '0 16px' }}>
            <MamoAvatar />
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            display: { xs: 'none', md: 'flex' },
            width: '100%',
            padding: { md: '0 48px', xs: '0 12px' },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <MamoBreadcrumbs />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MamoAvatar />
          </Box>
        </Toolbar>
        <Divider
          style={{
            width: '100%',
          }}
        />
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { md: mobileMenuScreenWidthToShow },
          flexShrink: { md: 0 },
        }}
      >
        <Drawer
          open={isMobileMenuOpen}
          variant="temporary"
          onClose={handleMobileMenuToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: mobileMenuScreenWidthToShow,
              backgroundColor: theme.palette.primary.main,
              border: 0,
              height: '100vh',
            },
          }}
        >
          {mobileMenuContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: mobileMenuScreenWidthToShow,
              backgroundColor: theme.palette.primary.main,
              border: 0,
              height: '100vh',
            },
          }}
          open
        >
          {mobileMenuContent}
        </Drawer>
      </Box>

      <Toolbar
        sx={{
          display: { xs: 'flex', md: 'none' },
          padding: { sm: '0 32px', xs: '0 20px' },
          minHeight: { xs: '56px' },
          backgroundColor: theme.palette.background.paper,
          marginTop: '56px',
          flexGrow: 1,
          width: {
            xs: '100%',
            md: `calc(100% - ${mobileMenuScreenWidthToShow}px)`,
          },
          ml: { md: `${mobileMenuScreenWidthToShow}px` },
        }}
      >
        <MamoBreadcrumbs />
      </Toolbar>
      <Box
        component="main"
        sx={{
          display: 'flex',
          width: {
            xs: '100%',
            md: `calc(100% - ${mobileMenuScreenWidthToShow}px)`,
          },
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          marginTop: {
            xs: 0,
            md: '64px',
          },
          ml: { md: `${mobileMenuScreenWidthToShow}px` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

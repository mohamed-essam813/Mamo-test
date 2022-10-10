import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { startCase } from 'lodash-es';
import { theme } from '../../theme';
import { MamoRoutes } from '../../Routes';

export function MamoBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(route => route);

  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      separator={
        <ChevronRight
          fontSize="small"
          style={{ color: theme.palette.text.disabled }}
        />
      }
    >
      <Link
        color="inherit"
        to={MamoRoutes.overview}
        style={{ textDecoration: 'none' }}
      >
        <Typography
          variant="caption"
          color={theme.palette.text.disabled}
          fontSize="14px"
        >
          Home
        </Typography>
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography
            variant="caption"
            color={theme.palette.text.disabled}
            key={to}
          >
            {startCase(value.replace('-', ' '))}
          </Typography>
        ) : (
          <Link color={theme.palette.text.disabled} to={to} key={to}>
            <Typography variant="caption" color={theme.palette.text.disabled}>
              {startCase(value.replace('-', ' '))}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

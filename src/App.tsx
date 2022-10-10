import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import {
  CreditCard,
  InsertLink,
  RequestQuote,
  Settings,
  SwapHoriz,
  Widgets,
} from '@mui/icons-material';
import { Layout } from './components/layout';
import { MamoRoutes } from './Routes';
import {
  AccountSettings,
  Invoices,
  Overview,
  Payments,
  PaymentsLinks,
  Settlements,
} from './views';

const queryClient = new QueryClient();

function App() {
  const routes = [
    {
      path: MamoRoutes.overview,
      label: 'Overview',
      icon: <Widgets fontSize="small" />,
    },
    {
      path: MamoRoutes.paymentsLinks,
      label: 'Payments links',
      icon: <InsertLink fontSize="small" />,
    },
    {
      path: MamoRoutes.invoices,
      label: 'Invoices',
      icon: <RequestQuote fontSize="small" />,
    },
    {
      path: MamoRoutes.payments,
      label: 'Payments',
      icon: <CreditCard fontSize="small" />,
    },
    {
      path: MamoRoutes.settlements,
      label: 'Settlements',
      icon: <SwapHoriz fontSize="small" />,
    },
    {
      path: MamoRoutes.accountSettings,
      label: 'Account settings',
      icon: <Settings fontSize="small" />,
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Layout routes={routes}>
        <Routes>
          <Route path={MamoRoutes.overview} element={<Overview />} />

          <Route path={MamoRoutes.paymentsLinks} element={<PaymentsLinks />} />

          <Route path={MamoRoutes.invoices} element={<Invoices />} />

          <Route path={MamoRoutes.payments} element={<Payments />} />

          <Route path={MamoRoutes.settlements} element={<Settlements />} />

          <Route
            path={MamoRoutes.accountSettings}
            element={<AccountSettings />}
          />

          <Route
            path="*"
            element={<Navigate to="/invoices" replace></Navigate>}
          />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

import React, { useState } from 'react';
import {
  Box,
  Chip,
  Divider,
  Fab,
  Grid,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { startCase } from 'lodash-es';
import { Add } from '@mui/icons-material';
import { MamoTable } from '../../components/table';
import {
  invoices,
  InvoiceStatus,
  InvoiceStatusesColors,
  InvoiceStatusLocale,
} from '../../data/invoices';
import { InvoiceCard } from './invoiceCard';
import { CreateInvoiceDialog } from './createInvoiceDialog';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ padding: '24px' }}
    >
      {value === index && children}
    </div>
  );
}

export function Invoices() {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [openCreateInvoiceDialog, setOpenCreateInvoiceDialog] =
    React.useState(false);

  const handleClickOpenCreateInvoiceDialog = () => {
    setOpenCreateInvoiceDialog(true);
  };

  const handleCloseCreateInvoiceDialog = () => {
    setOpenCreateInvoiceDialog(false);
  };

  const invoicesTabs = ['all', 'outstanding', 'paid', 'cancelled'];
  const tableColumns = [
    {
      id: 'id',
      label: 'Invoice ID',
    },
    {
      id: 'customerName',
      label: 'Customer',
    },
    {
      id: 'amount',
      label: 'Amount',
      format: (value: number) => `AED ${value}`,
    },
    {
      id: 'status',
      label: 'Status',
      format: (value: number) => (
        <Chip
          label={startCase(InvoiceStatusLocale[value])}
          style={{
            // @ts-ignore
            backgroundColor: InvoiceStatusesColors[value]['50'],
            // @ts-ignore
            color: InvoiceStatusesColors[value].main,
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        />
      ),
    },
    {
      id: 'createdAt',
      label: 'Created',
    },
    {
      id: '',
      label: '',
    },
  ];

  function handleTabChange(event: React.SyntheticEvent, newValue: number) {
    setSelectedTab(newValue);
  }

  let computedData = invoices;

  if (invoicesTabs[selectedTab] !== 'all') {
    computedData = invoices.filter(
      invoice =>
        invoice.status === invoicesTabs.indexOf(invoicesTabs[selectedTab]) - 1,
    );
  }

  function invoicesTypeCount(type: InvoiceStatus) {
    return invoices.filter(invoice => invoice.status === type).length;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          backgroundColor: theme.palette.background.paper,
          padding: { md: '32px 48px', sm: '32px', xs: '20px' },
          alignItems: 'flex-start',
        }}
      >
        <Typography variant="h4" fontSize="28px" fontWeight="bold">
          Invoices
        </Typography>
        <Typography variant="caption" fontSize="14px">
          Total outstanding amount:
          <Typography
            variant="caption"
            fontSize="14px"
            marginLeft={1}
            fontWeight="600"
          >
            AED 1,915.76
          </Typography>
        </Typography>
      </Box>
      <Divider
        style={{
          width: '100%',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: {
            md: 'calc(100% - 96px)',
            sm: 'calc(100% - 64px)',
            xs: '100%',
          },
          backgroundColor: {
            sm: theme.palette.background.paper,
            xs: theme.palette.background.default,
          },
          margin: { md: '48px', sm: '32px', xs: '32px 0' },
          borderRadius: '16px',
        }}
      >
        <Box sx={{ display: 'flex', padding: '0 16px', alignItems: 'center' }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            style={{ flexGrow: 1 }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {invoicesTabs.map(tab => {
              const isTabSelected = selectedTab === invoicesTabs.indexOf(tab);

              return (
                <Tab
                  key={tab}
                  label={
                    tab === 'all'
                      ? `all invoices (${invoices.length})`
                      : // @ts-ignore
                        `${tab} (${invoicesTypeCount(InvoiceStatus[tab])})`
                  }
                  sx={{
                    margin: { sm: '0 24px', xs: '0 12px' },
                    padding: '36px 0',
                    fontSize: '14px',
                    fontWeight: isTabSelected ? 'bold' : 'normal',
                    color: isTabSelected
                      ? theme.palette.primary.main
                      : theme.palette.text.disabled,
                    opacity: 1,
                  }}
                />
              );
            })}
          </Tabs>
          <Box
            sx={{
              flexGrow: 0,
              padding: '0 16px',
              position: { xs: 'absolute', sm: 'initial' },
              bottom: { xs: '0px' },
              right: { xs: '4px' },
            }}
          >
            <Fab
              variant="extended"
              color="primary"
              size="medium"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                width: '170px',
              }}
              onClick={handleClickOpenCreateInvoiceDialog}
            >
              <Add fontSize="inherit" />
              <Typography
                variant="caption"
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  marginLeft: '12px',
                }}
              >
                New invoice
              </Typography>
            </Fab>
            <Fab
              color="primary"
              size="medium"
              sx={{
                display: { xs: 'none', sm: 'inline-flex', md: 'none' },
              }}
              onClick={handleClickOpenCreateInvoiceDialog}
            >
              <Add fontSize="small" />
            </Fab>
          </Box>
        </Box>
        <Divider sx={{ display: { sm: 'block', xs: 'none' }, width: '100%' }} />
        <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
          {invoicesTabs.map((tab, index) => {
            return (
              <TabPanel value={selectedTab} index={index}>
                <MamoTable
                  key={index}
                  columns={tableColumns}
                  data={computedData}
                />
              </TabPanel>
            );
          })}
        </Box>
        <Grid
          sx={{ display: { xs: 'grid', sm: 'none' }, margin: '16px 20px 0' }}
          rowGap="12px"
        >
          {computedData.map((invoice, index) => {
            return <InvoiceCard key={index} {...invoice} />;
          })}
        </Grid>
      </Box>

      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
          flexGrow: 0,
          padding: '0 16px',
          position: 'fixed',
          bottom: '24px',
          right: '4px',
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          size="medium"
          sx={{
            width: '170px',
          }}
          onClick={handleClickOpenCreateInvoiceDialog}
        >
          <Add fontSize="inherit" />
          <Typography
            variant="caption"
            sx={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              marginLeft: '12px',
            }}
          >
            New invoice
          </Typography>
        </Fab>
      </Box>
      <CreateInvoiceDialog
        open={openCreateInvoiceDialog}
        onClose={handleCloseCreateInvoiceDialog}
        fullScreen
      />
    </Box>
  );
}

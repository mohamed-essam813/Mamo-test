import React from 'react';
import { Box, Chip, IconButton, Typography, useTheme } from '@mui/material';
import { startCase } from 'lodash-es';
import { MoreHoriz } from '@mui/icons-material';
import {
  InvoiceStatus,
  InvoiceStatusesColors,
  InvoiceStatusLocale,
} from '../../../data/invoices';

type IInvoice = {
  id: string;
  customerName: string;
  amount: number;
  status: InvoiceStatus;
  createdAt: string;
};

export function InvoiceCard(invoice: IInvoice) {
  const theme = useTheme();

  return (
    <Box
      key={invoice.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '560px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '16px',
        padding: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Chip
          label={startCase(InvoiceStatusLocale[invoice.status])}
          style={{
            // @ts-ignore
            backgroundColor: InvoiceStatusesColors[invoice.status]['50'],
            // @ts-ignore
            color: InvoiceStatusesColors[invoice.status].main,
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        />
        <IconButton>
          <MoreHoriz
            fontSize="small"
            style={{
              color: theme.palette.text.disabled,
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <Typography
          style={{
            color: theme.palette.text.primary,
          }}
          fontSize="14px"
          fontWeight="bold"
        >
          {invoice.customerName}
        </Typography>
        <Typography
          style={{
            color: theme.palette.text.primary,
          }}
          fontSize="14px"
          fontWeight="bold"
        >
          {`AED ${invoice.amount}`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          style={{
            color: theme.palette.text.disabled,
          }}
          fontSize="12px"
          fontWeight="bold"
        >
          {invoice.id}
        </Typography>
        <Typography
          style={{
            color: theme.palette.text.disabled,
          }}
          fontSize="12px"
          fontWeight="bold"
        >
          {invoice.createdAt}
        </Typography>
      </Box>
    </Box>
  );
}

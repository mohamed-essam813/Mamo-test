import { Box, Typography } from '@mui/material';
import React from 'react';
import { ROWS_PER_PAGE } from './Table';

type ILabelDisplayedRowsProps = {
  from: number;
  to: number;
  count: number;
  page: number;
};

export function LabelDisplayedRows(props: ILabelDisplayedRowsProps) {
  const { from, to, count, page } = props;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        fontSize="14px"
        fontWeight="bold"
      >{`${from}-${to} of ${count} invoices`}</Typography>
      <Typography fontSize="14px" fontWeight="bold" sx={{ mr: '16px' }}>
        {`Page ${page + 1} of ${Math.round(count / ROWS_PER_PAGE)}`}
      </Typography>
    </Box>
  );
}

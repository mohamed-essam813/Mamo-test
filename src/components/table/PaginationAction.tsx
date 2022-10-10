import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { ROWS_PER_PAGE } from './Table';

type IPaginationActionsProps = {
  count: number;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
};

export function PaginationActions(props: IPaginationActionsProps) {
  const { count, page, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 0,
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        style={{ marginRight: '8px' }}
      >
        <ChevronLeft fontSize="small" />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / ROWS_PER_PAGE) - 1}
        aria-label="next page"
      >
        <ChevronRight fontSize="small" />
      </IconButton>
    </Box>
  );
}

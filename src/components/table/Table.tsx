import { MoreHoriz } from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from '@mui/material';
import React from 'react';
import { LabelDisplayedRows } from './labelDisplayedRows';
import { PaginationActions } from './PaginationAction';

type IColumn = {
  id: string;
  label: string;
  minWidth?: number;
  format?: (value: number) => JSX.Element | string;
};

type IMamoTable = {
  columns: IColumn[];
  data: any[];
};

export const ROWS_PER_PAGE = 10;

export function MamoTable({ columns, data }: IMamoTable) {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
      <Table stickyHeader>
        <TableHead
          style={{
            width: '100%',
          }}
        >
          <TableRow>
            {columns.map((column, index) => {
              let borderRadius: string | number = 0;

              if (index === 0) {
                borderRadius = '12px 0 0 12px';
              }

              return (
                <TableCell
                  key={index}
                  style={{
                    minWidth: column.minWidth || `${100 / columns.length}%`,
                    border: 0,
                    padding: '12px 16px',
                    borderRadius,
                    color: theme.palette.text.disabled,
                  }}
                >
                  {column.label}
                </TableCell>
              );
            })}
            <TableCell
              style={{
                border: 0,
                borderRadius: '0 12px 12px 0',
              }}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
            .map((item, index) => (
              <TableRow tabIndex={-1} key={index}>
                {columns.map((column, index2) => {
                  const value = item[column.id];

                  return (
                    <TableCell
                      key={index2}
                      style={{
                        minWidth: column.minWidth || `${100 / columns.length}%`,
                        padding: '24px 16px',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
                <TableCell>
                  <IconButton>
                    <MoreHoriz
                      fontSize="small"
                      style={{
                        color: theme.palette.text.disabled,
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow style={{ border: 0 }}>
            <TablePagination
              count={data.length}
              rowsPerPage={ROWS_PER_PAGE}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[]}
              ActionsComponent={PaginationActions}
              labelDisplayedRows={LabelDisplayedRows}
              sx={{
                marginTop: '16px',
                '.MuiTablePagination-spacer': {
                  display: 'none',
                },
                '.MuiToolbar-gutters': {
                  marginTop: '16px',
                  padding: 0,
                },
                '.MuiTablePagination-displayedRows': {
                  flexGrow: 1,
                },
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

import { Paper } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowModel,
  GridRowParams,
  GridRowsProp,
} from '@mui/x-data-grid';

interface Props {
  rows: GridRowsProp;
  columns: GridColDef[];
  columnVisibilityModel?: GridColumnVisibilityModel;
  loading?: boolean;
  onRowClick: (row: GridRowModel) => void;
}

function Table({ rows, columns, columnVisibilityModel, loading = false, onRowClick }: Props) {
  const handleRowClick = (params: GridRowParams) => {
    onRowClick(params.row);
  };

  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: 'name', sort: 'asc' }],
          },
        }}
        loading={loading}
        columnVisibilityModel={columnVisibilityModel}
        onRowClick={handleRowClick}
        disableColumnMenu
        hideFooter
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            color: 'text.secondary',
            fontSize: 16,
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: 'primary.main',
          },
          '& .MuiDataGrid-sortIcon': {
            color: 'secondary.main',
          },
          '& .MuiButtonBase-root': {
            color: 'secondary.main',
          },
          border: 'none',
        }}
      />
    </Paper>
  );
}

export default Table;

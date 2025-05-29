"use client";

import { Box } from '@mui/material';
import { DataGrid, GridRowIdGetter, GridColDef } from '@mui/x-data-grid';
import { useEffect, useRef, useState } from 'react';

type DataTableProps = {
  tableRows: Array<object>
  columns: GridColDef[]
  getRowId?: GridRowIdGetter<any>;
}

function DataTable({ tableRows, columns, getRowId }: DataTableProps) {
  const [rows, setRows] = useState<any[]>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    setRows([...tableRows]);

    return () => {
      isMounted.current = false; // Cleanup on unmount
    };
  }, [tableRows]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ maxWidth: '100%' }}
        rows={rows.map((row, index) => ({ id: index, ...row }))}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  )
}

export default DataTable
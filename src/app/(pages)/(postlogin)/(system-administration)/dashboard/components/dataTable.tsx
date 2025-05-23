"use client";

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useRef, useState } from 'react';

type DataTableProps = {
  tableRows: Array<object>
  columns: GridColDef[]
}

function DataTable({ tableRows, columns }: DataTableProps) {
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
    <DataGrid
      autoHeight
      sx={{maxWidth: '100%'}}
      rows={rows.map((row, index) => ({ id: index, ...row }))}
      columns={columns}
    />
  )
}

export default DataTable
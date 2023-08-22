import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import RootTable from "../Interface";

interface RootObject {
    table: RootTable[];
}

const columns: GridColDef[] = [
  { field: "userId", headerName: "User Id" },
  { field: "id", headerName: "Id" },
  { field: "title", headerName: "Title", width: 550 },
  { field: "body", headerName: "Body", width: 550 }
];

const DataTable: React.FC<RootObject> = ({table}: RootObject) => {  
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid rows={table} columns={columns} />
    </div>
  );
}

export default DataTable;
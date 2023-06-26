import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useGetAdminsQuery } from "../../state/api";

const Admins = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      sortable: false,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value
          .toString()
          .replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      },
      sortable: false,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
      sortable: false,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
      sortable: false,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="Managing admins and list of admins" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "900" },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            background: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            background: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          
        />
      </Box>
    </Box>
  );
};

export default Admins;

import { useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { GridColDef, GridRowModel } from "@mui/x-data-grid";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "../components/Table/Table";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { Contact } from "../models/contactModel";
import contactsActions from "../actions/contactsActions";
import { IconButton, TextField } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 175,
    resizable: false,
    valueGetter: (value, row) => {
      return `${value} ${row.surname[0]}.`;
    },
  },
  { field: "city", headerName: "City", width: 175, resizable: false },
  {
    field: "isActive",
    renderHeader: () => <VisibilityIcon />,
    renderCell: (params) => params.row.isActive && <VisibilityIcon />,
    width: 61,
    sortable: false,
    resizable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 261,
    sortable: false,
    resizable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 175,
    sortable: false,
    resizable: false,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "action",
    width: 56,
    renderHeader: () => (
      <IconButton onClick={() => console.log("clicked header")}>
        <MenuIcon />
      </IconButton>
    ),
    sortable: false,
    resizable: false,
  },
];

function ContactsTable() {
  const dispatch = useAppDispatch();

  const contacts: Contact[] = useAppSelector(
    (state) => state.contacts.contacts
  );

  const loading: boolean = useAppSelector(
    (state) => state.contacts.loadingContacts
  );

  useEffect(() => {
    dispatch(contactsActions.getAllContacts());
  }, []);

  const handleRowClick = (row: GridRowModel) => {
    console.log("Row clicked:", row);
    dispatch(contactsActions.getContactById(row.id));
  };

  return (
    <div>
      <div>
        <TextField label="Name" size="small" defaultValue="" />
        <TextField
          id="outlined-select-currency"
          select
          size="small"
          label="City"
        >
          {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>
      </div>
      <Table
        rows={contacts}
        columns={columns}
        columnVisibilityModel={{ id: false }}
        loading={loading}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export default ContactsTable;

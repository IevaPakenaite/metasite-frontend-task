import { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridColDef, GridRowModel } from '@mui/x-data-grid';
import Table from '../components/Table/Table';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { Contact } from '../models/contactModel';
import contactsActions from '../actions/contactsActions';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 175,
    resizable: false,
    valueGetter: (value, row) => {
      return `${value} ${row.surname[0]}.`;
    },
  },
  { field: 'city', headerName: 'City', width: 175, resizable: false },
  {
    field: 'isActive',
    renderHeader: () => <VisibilityIcon />,
    renderCell: (params) => params.row.isActive && <VisibilityIcon />,
    width: 61,
    sortable: false,
    resizable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 261,
    sortable: false,
    resizable: false,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 175,
    sortable: false,
    resizable: false,
    align: 'right',
    headerAlign: 'right',
  },
];

function ContactsTable() {
  const dispatch = useAppDispatch();

  const contactsFromState: Contact[] = useAppSelector((state) => state.contacts.contacts);
  const loading: boolean = useAppSelector((state) => state.contacts.loadingContacts);

  const [contacts, setContacts] = useState<Contact[]>(contactsFromState);
  const [cities, setCities] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [showActive, setShowActive] = useState<boolean>(true);
  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  useEffect(() => {
    dispatch(contactsActions.getAllContacts());
  }, [dispatch]);

  useEffect(() => {
    setContacts(contactsFromState);
    setCities(contactsFromState.map((item) => item.city));
  }, [contactsFromState]);

  function handleRowClick(row: GridRowModel) {
    dispatch(contactsActions.getContactById(row.id));
  }

  function handleFilter() {
    let filteredContacts = contacts;

    if (nameFilter) {
      filteredContacts = contactsFromState.filter((item) =>
        `${item.name} ${item.surname[0]}.`.toLowerCase().includes(nameFilter.toLowerCase().trim()),
      );
    }

    if (cityFilter) {
      filteredContacts = filteredContacts.filter((item) => item.city === cityFilter);
    }

    if (!showActive) {
      filteredContacts = filteredContacts.filter((item) => !item.isActive);
    }

    setContacts(filteredContacts);
    setShowClearButton(true);
  }

  function handleClearFilter() {
    setNameFilter('');
    setCityFilter('');
    setShowActive(true);
    setContacts(contactsFromState);
    setShowClearButton(false);
  }

  return (
    <div>
      <div
        style={{
          marginBottom: '42px',
          display: 'flex',
          flexDirection: 'row',
          gap: '14px',
          alignItems: 'center',
        }}
      >
        <Input
          label="Name"
          value={nameFilter}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNameFilter(event.target.value);
          }}
        />
        <Dropdown
          label="City"
          value={cityFilter}
          options={cities}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCityFilter(event.target.value);
          }}
        />
        <Checkbox
          value={showActive}
          label="Show active"
          onChange={() => setShowActive(!showActive)}
        />
        <Button label="Filter" onClick={handleFilter} />
        {showClearButton && <Button label="Clear filter" onClick={handleClearFilter} />}
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

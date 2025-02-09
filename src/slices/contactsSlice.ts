import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../models/contactModel";

interface ContactsSliceState {
  loadingContacts: boolean;
  loadingContactById: boolean;
  contacts: Contact[];
  contact: Contact | null;
  error: string | null;
}

const initialState: ContactsSliceState = {
  loadingContacts: false,
  loadingContactById: false,
  contacts: [],
  contact: null,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getAllContactsRequest: (state) => {
      state.error = null;
      state.contacts = [];
      state.loadingContacts = true;
    },
    getAllContactsSuccess: (state, action: PayloadAction<Contact[]>) => {
      state.error = null;
      state.loadingContacts = false;
      state.contacts = action.payload;
    },
    getAllContactsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.contacts = [];
      state.loadingContacts = false;
    },
    getContactByIdRequest: (state) => {
      state.error = null;
      state.contact = null;
      state.loadingContactById = true;
    },
    getContactByIdSuccess: (state, action: PayloadAction<Contact>) => {
      state.error = null;
      state.loadingContactById = false;
      state.contact = action.payload;
    },
    getContactByIdError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.contact = null;
      state.loadingContactById = false;
    },
  },
});

export const {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  getContactByIdRequest,
  getContactByIdSuccess,
  getContactByIdError,
} = contactsSlice.actions;
export default contactsSlice.reducer;

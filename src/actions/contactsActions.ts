import { Dispatch } from "redux";
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  getContactByIdRequest,
  getContactByIdSuccess,
  getContactByIdError,
} from "../slices/contactsSlice";
import contactsService from "../services/contactsService";
import { Contact } from "../models/contactModel";

function getAllContacts() {
  return (dispatch: Dispatch) => {
    dispatch(getAllContactsRequest());

    contactsService
      .getAllContacts()
      .then((res: Contact[]) => {
        dispatch(getAllContactsSuccess(res));
      })
      .catch((error) => {
        dispatch(getAllContactsError(error.message));
      });
  };
}

function getContactById(id: string) {
  return (dispatch: Dispatch) => {
    dispatch(getContactByIdRequest());

    contactsService
      .getContactById(id)
      .then((res: Contact) => {
        dispatch(getContactByIdSuccess(res));
      })
      .catch((error) => {
        dispatch(getContactByIdError(error.message));
      });
  };
}

const contactsActions = {
  getAllContacts,
  getContactById,
};

export default contactsActions;

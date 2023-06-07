import { Contact, ContactActionType, FormDetails } from "../types";

export const addContact = (payload: FormDetails) => {
  return {
    type: ContactActionType.ADD_CONTACT,
    payload,
  };
};

export const removeContact = (id: number) => {
  return {
    type: ContactActionType.REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};
export const editContact = (payload: Contact) => {
  return {
    type: ContactActionType.EDIT_CONTACT,
    payload,
  };
};

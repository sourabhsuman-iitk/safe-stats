import { ActionTypes, Contact, ContactActionType } from "../types";

const initialState = {
  contacts: (JSON.parse(localStorage.getItem("contacts")!) || []) as Contact[],
};

export default function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case ContactActionType.ADD_CONTACT: {
      let flag = 0;
      if (
        action.payload.firstName === "" ||
        action.payload.lastName === "" ||
        action.payload.phone === ""
      ) {
        alert("Please fill the required details");
        flag = 1;
      } else {
        state.contacts.forEach((el: Contact) => {
          if (
            el.firstName === action.payload.firstName &&
            el.lastName === action.payload.lastName
          ) {
            alert("Duplicate contact");
            flag = 1;
          }
        });
      }

      if (!flag) {
        alert("Contact Saved");

        let updatedContacts =
          (JSON.parse(localStorage.getItem("contacts")!) || []) as Contact[];
        updatedContacts.push({
          id: state.contacts.length + 1,
          ...action.payload,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
      return state;
    }

    case ContactActionType.REMOVE_CONTACT: {
      let contacts = JSON.parse(localStorage.getItem("contacts")!) as Contact[];
      let updatedContacts = contacts.filter(
        (el: Contact) => el.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,

        contacts: [...updatedContacts],
      };
    }

    case ContactActionType.EDIT_CONTACT: {
      if (
        action.payload.firstName === "" ||
        action.payload.lastName === "" ||
        action.payload.phone === ""
      ) {
        alert("Empty Field");
        return state;
      } else {
        let flag = 0;
        let contacts = JSON.parse(
          localStorage.getItem("contacts")!
        ) as Contact[];

        contacts.forEach((el: Contact) => {
          if (
            el.id !== action.payload.id &&
            el.firstName === action.payload.firstName &&
            el.lastName === action.payload.lastName
          ) {
            alert("Duplicate Name");
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          let updatedContacts = contacts.map((el: any) => {
            if (el.id === action.payload.id) {
              return (el = { ...action.payload });
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          alert("Contact updated");
          return {
            ...state,
            contacts: state.contacts.map((el: any) => {
              if (el.id === action.payload.id) {
                return (el = { ...action.payload });
              } else {
                return el;
              }
            }),
          };
        }
      }
    }

    default:
      return state;
  }
}

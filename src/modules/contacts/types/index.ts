export enum ContactActionType {
  ADD_CONTACT = "ADD_CONTACT",
  REMOVE_CONTACT = "REMOVE_CONTACT",
  EDIT_CONTACT = "EDIT_CONTACT",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface FormDetails {
  firstName: string;
  lastName: string;
  phone: string;
  status: UserStatus;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  status: UserStatus;
}

export type ActionTypes =
  | { type: typeof ContactActionType.ADD_CONTACT; payload: FormDetails }
  | {
      type: typeof ContactActionType.REMOVE_CONTACT;
      payload: {
        id: number;
      };
    }
  | { type: typeof ContactActionType.EDIT_CONTACT; payload: Contact };

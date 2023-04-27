import { ActionType } from "../action-types";

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: Address;
}

export interface UsersAction {
  type: ActionType.SEARCH_USERS;
  payload: User[];
}

export interface DeleteAction {
  type: ActionType.DELETE_USERS;
  payload: User[];
}

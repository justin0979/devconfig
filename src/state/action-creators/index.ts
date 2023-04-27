import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action, User } from "../actions";

export const fetchLists =
  (type: string): any =>
  async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get<User[]>(
      `https://jsonplaceholder.typicode.com/${type}`,
    );

    dispatch({
      type: ActionType.SEARCH_USERS,
      payload: data,
    });
  };

export const deleteList = () => {
  return {
    type: ActionType.DELETE_USERS,
    payload: [],
  };
};

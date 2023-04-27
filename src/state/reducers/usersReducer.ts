import { ActionType } from "../action-types";
import { User, Action } from "../actions";

export const usersReducer = (
  state: User[] = [],
  action: Action,
): User[] => {
  switch (action.type) {
    case ActionType.SEARCH_USERS:
      return action.payload;
    case ActionType.DELETE_USERS:
      return action.payload;
    default:
      return state;
  }
};

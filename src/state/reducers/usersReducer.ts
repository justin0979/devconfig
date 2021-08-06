import { ActionType, User, UsersAction } from "&state";

export const usersReducer = (
  state: User[] = [],
  action: UsersAction,
): User[] => {
  switch (action.type) {
    case ActionType.SEARCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

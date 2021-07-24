import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer"

export const reducers = combineReducers({
  users: usersReducer
})

export type RootState = ReturnType<typeof reducers>

import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "&state";

export const fetchLists =
  (type: string) => async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/${type}`,
    );

    dispatch({
      type: ActionType.SEARCH_USERS,
      payload: data,
    });
  };

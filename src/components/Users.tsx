import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { fetchLists, deleteList } from "../state";

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);

  const getUsersList: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    dispatch(fetchLists("users"));
  };

  const emptyUsersList: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    dispatch(deleteList());
  };

  const renderButton = (): JSX.Element => {
    if (users.length) {
      return (
        <button className="btn" onClick={emptyUsersList}>
          Remove All Users
        </button>
      );
    }
    return (
      <button className="btn" onClick={getUsersList}>
        Get Users with Axios
      </button>
    );
  };

  const renderUsers = (): JSX.Element | JSX.Element[] => {
    if (users.length === 0) {
      return <></>;
    }
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <section className="section__users">
      <h2>Users</h2>
      {renderButton()}
      <ol className="section__users--list">{renderUsers()}</ol>
    </section>
  );
};

export default Users;

import { useDispatch } from "react-redux";
import { useAppSelector } from "&hooks";
import { fetchLists } from "&state";

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);

  const getUsersList: React.MouseEventHandler<HTMLButtonElement> =
    () => {
      dispatch(fetchLists("users"));
    };

  return (
    <section>
      <h2>Users</h2>
      <button onClick={getUsersList}>Get Users</button>
      <ol className="users-list">
        {users &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ol>
    </section>
  );
};

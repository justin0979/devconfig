// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../hooks";
// import { fetchLists, deleteList } from "../state";
import { useState, ReactNode } from "react";
import { useFetchUsersQuery, User } from "../store";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { data, error, isFetching } = useFetchUsersQuery();
  // const dispatch = useDispatch();
  // const users = useAppSelector((state) => state.users);

  // const getUsersList: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = () => {
  //     dispatch(fetchLists("users"));

  // };

  // const emptyUsersList: React.MouseEventHandler<
  //   HTMLButtonElement
  // > = () => {
  //      dispatch(deleteList());
  // };

  const renderUsers = (): ReactNode => {
    return (
      data &&
      data.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })
    );
  };

  return (
    <section className="section__users">
      <ol className="section__users--list">{renderUsers()}</ol>
    </section>
  );
};

export default Users;

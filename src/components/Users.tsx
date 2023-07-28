import { ReactNode } from "react";
import { useFetchUsersQuery, User } from "../store";

const Users: React.FC = () => {
  const { data, error, isFetching } = useFetchUsersQuery();

  let content: ReactNode;

  if (error) {
    content = (
      <div>There seems to be an error with getting the users.</div>
    );
  } else if (isFetching) {
    content = <div>Delivering you those names.</div>;
  } else {
    content =
      data &&
      data.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      });
  }

  return (
    <section className="section__users">
      <ol className="section__users--list">{content}</ol>
    </section>
  );
};

export default Users;

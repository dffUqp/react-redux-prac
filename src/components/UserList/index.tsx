import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/UseTypeSelector';

const UserList = (): JSX.Element => {
  const { error, loading, users } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;

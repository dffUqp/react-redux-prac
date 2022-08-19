import React from 'react';
import TodoList from './TodoList';
import UserList from './UserList';

const MainPage = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};

export default MainPage;

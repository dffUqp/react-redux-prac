import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/UseTypeSelector';
import styles from './TodoList.module.scss';

const TodoList = (): JSX.Element => {
  const { fetchTodo, setPageTodo } = useActions();
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageTodo(page);
  };
  const [count, setCount] = useState<number>(10);
  const { todo, loading, error, page, limit } = useTypeSelector(
    (state) => state.todo
  );

  const pagination = (item: string) => {
    setCount(Math.ceil(parseInt(item) / limit));
  };

  useEffect(() => {
    fetchTodo(page, limit, pagination);
    // eslint-disable-next-line
  }, [page, limit]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.todo}>
      <div className={styles.todo__items}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          todo.map((item) => (
            <div key={item.id} className={styles.todo__item}>
              {item.title}
            </div>
          ))
        )}
      </div>

      <Pagination count={count} page={page} onChange={handleChange} />
    </div>
  );
};

export default TodoList;

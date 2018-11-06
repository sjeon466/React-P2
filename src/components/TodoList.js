import React, { Fragment } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Fragment 는, JSX 를 감싸고 싶은데 따로 DOM 엘리먼트를 만들고싶지 않을 때 사용합니다.
  return (
    <Fragment>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Fragment>
  );
};

export default TodoList;
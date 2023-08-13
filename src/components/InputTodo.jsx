import React from 'react'
import useOnClick from '../hooks/onClick';
import useGetTodoText from '../hooks/getTodoText';
import { todoTextState } from '../store/todoTextState';
import { useRecoilValue } from 'recoil';

const InputTodo = () => {
  const { onClickAdd } = useOnClick();
  const { getTodoText } = useGetTodoText();
  const todoText = useRecoilValue(todoTextState);
  return (
    <div className="input-area">
      <input placeholder='TODOを入力' value={todoText} onChange={getTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default InputTodo
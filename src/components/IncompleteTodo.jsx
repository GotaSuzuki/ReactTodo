import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { incompleteState } from '../store/incompleteState';
import { useRecoilValue } from 'recoil';

const IncompleteTodo = ({ onClickDelete, onClickComplete }) => {
  const incompleteTodos = useRecoilValue(incompleteState);
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div className="list-row" key={uuidv4()}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default IncompleteTodo
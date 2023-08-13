import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import { completeState } from '../store/completeState';

const Complete = ({ onClickBack }) => {
  const completeTodos = useRecoilValue(completeState);
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div className="list-row" key={uuidv4()}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Complete
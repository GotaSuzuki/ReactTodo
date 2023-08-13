import React from 'react'

const InputTodo = ({ todoText, getTodoText, onClickAdd }) => {
  return (
    <div className="input-area">
      <input placeholder='TODOを入力' value={todoText} onChange={getTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default InputTodo
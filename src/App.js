import './App.css';
import Complete from './components/Complete';
import IncompleteTodo from './components/IncompleteTodo';
import InputTodo from './components/InputTodo';
import { useRecoilState } from 'recoil';
import { todoTextState } from './store/todoTextState';
import useOnClick from './hooks/onClick';

function App() {
  const { onClickAdd, onClickDelete, onClickComplete, onClickBack } = useOnClick();
  const [todoText, setTodoText] = useRecoilState(todoTextState);

  const getTodoText = (e) => setTodoText(e.target.value);

  return (
    <div className="App">
      <InputTodo todoText={todoText} getTodoText={getTodoText} onClickAdd={onClickAdd} />
      <IncompleteTodo onClickDelete={onClickDelete} onClickComplete={onClickComplete} />
      <Complete onClickBack={onClickBack} />
    </div >
  );
}

export default App;

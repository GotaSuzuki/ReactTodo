import { useRecoilState } from 'recoil';
import { completeState } from '../store/completeState';
import { todoTextState } from '../store/todoTextState';
import { incompleteState } from '../store/incompleteState';

const useOnClick = () => {
  const [incompleteTodos, setIncompleteTodos] = useRecoilState(incompleteState);
  const [completeTodos, setCompleteTodos] = useRecoilState(completeState);
  const [todoText, setTodoText] = useRecoilState(todoTextState);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }
  return { onClickAdd, onClickDelete, onClickComplete, onClickBack }
}

export default useOnClick
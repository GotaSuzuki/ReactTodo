import { useSetRecoilState } from 'recoil';
import { todoTextState } from '../store/todoTextState';

const useGetTodoText = (e) => {
  const setTodoText = useSetRecoilState(todoTextState);

  const getTodoText = (e) => {
    setTodoText(e.target.value);
  }
  return { getTodoText };
}

export default useGetTodoText
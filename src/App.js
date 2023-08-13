import './App.css';
import Complete from './components/Complete';
import IncompleteTodo from './components/IncompleteTodo';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <div className="App">
      <InputTodo />
      <IncompleteTodo />
      <Complete />
    </div >
  );
}

export default App;

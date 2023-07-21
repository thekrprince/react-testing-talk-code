import Todo from "./components/todo";
import "./App.css";
import UserLists from "./components/user-lists";

function App() {
  return (
    <div className="App">
      <h2>React Testing Demo</h2>
      <Todo />
      <UserLists />
    </div>
  );
}

export default App;

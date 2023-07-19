import { RouterProvider, createHashRouter } from "react-router-dom";
import Counter from "./components/counter/counter";
import Switch from "./components/switch";
import Todo from "./components/todo";
import "./App.css";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Switch />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
  ]);

  return (
    <div className="App">
      <h2>React Testing Demo</h2>
      <Todo />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

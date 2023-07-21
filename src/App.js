import { RouterProvider, createHashRouter } from "react-router-dom";
import Todo from "./components/todo";
import "./App.css";
import UserLists from "./components/user-lists";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Todo />,
    },
    {
      path: "/users",
      element: <UserLists />,
    },
  ]);

  return (
    <div className="App">
      <h2>React Testing Demo</h2>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./features/Home/Home";
import Navigation from "./features/Navigation/Navigation";
import About from "./features/About/About";
import CreateTask from "./features/CreateTask/CreateTask";
import TaskList from "./features/TaskList/TaskList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/taskList" element={<TaskList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

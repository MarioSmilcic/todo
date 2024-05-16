import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./features/Home/Home";
import Navigation from "./features/Navigation/Navigation";
import About from "./features/About/About";
import CreateTask from "./features/CreateTask/CreateTask";
import TaskList from "./features/TaskList/TaskList";
import { useNotificationStore } from "./store/notification/notification.store";

import Notification from "./components/Notifications/Notification";

const App = () => {
  const isOpen = useNotificationStore((state) => state.isOpen);

  return (
    <>
      <BrowserRouter>
        {isOpen && <Notification />}

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

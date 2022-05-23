
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ViewTodaysTask from './pages/ViewTodaysTask';
import ViewWeekTask from './pages/ViewWeekTask';
import EditTask from './pages/EditTask';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewTodaysTask />} />
        <Route path="/weeks-task" element={<ViewWeekTask />} />
        <Route path="/edit-task" element={<EditTask />} />
        <Route path="/all-task" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;

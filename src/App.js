import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

//function App() {
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTasks(data.todos))
      .catch(error => console.log(error));
  }, []);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('Enjoy the silence')}
    </div>
  );
}

export default App;

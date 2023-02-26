import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'


//function App()
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

//Alternate data to fetch and populate

// useEffect(() => {
//   const fetchTasks = async () => {
//     const res = await fetch('https://dummyjson.com/todos')
//       const data = await res.json()
//          
//       return data
//  }
//
//  fetchTasks() 
// }, []);

// Fetch Tasks
  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

// Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = (task) => {
    fetch('http://localhost:5000/todos/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => setTasks([...tasks, data]))
    .catch(error => console.log(error));

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task  }
    // setTasks([...tasks, newTask])

  }

  // Delete Task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    setTasks(tasks.filter((task) => task.id !== id));
  })
  .catch(error => console.log(error));
  }

  // Toggle Reminder/Completed

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, completed: !taskToToggle.completed }

    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: data.completed } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask}/>
        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
              />) : (
                'Enjoy the silence'
                )}
            </>
          } />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

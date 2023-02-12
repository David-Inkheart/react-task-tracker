import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

//function App() {
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Eleanor's Paediatrician Appointment",
      day: 'Feb 13th at 1:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Valentine Dinner with Sunflower',
      day: 'Feb 14th at 6:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: "Book club watch party",
      day: 'Feb 17th at 8:30pm',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

// class App extends React.Component {
//  render() {
//    return <h1>Hello from a class</h1>
//  }
//}
export default App;

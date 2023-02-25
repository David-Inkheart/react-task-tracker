import {useState} from "react"

const AddTask = ({ onAdd }) => {
const [todo, setTodo] = useState('')
const [day, setDay] = useState('')
const [completed, setCompleted] = useState('done')

const onSubmit = (e) => {
    e.preventDefault()

    if(!todo) {
        alert('Please add a task')
        return
    }

    onAdd({ todo, day, completed })

    setTodo('')
    setDay('')
    setCompleted('done')
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Completed</label>
            <input type="checkbox" checked={completed==='undone'} value={completed} onChange={(e) => setCompleted(e.currentTarget.checked ? "undone" : "")} />
        </div>

        <input type="submit" value="save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask

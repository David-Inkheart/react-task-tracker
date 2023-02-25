import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed || task.reminder? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.todo} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{`${task.completed ? task.userId = 'Done' : 'Undone'}`}</p>
    </div>
  )
}

export default Task

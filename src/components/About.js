import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>Simple functionalities to learn the basics of react:</p>
      <ul className='aboutList'>
        <li>Add a task</li>
        <li>Delete a task</li>
        <li>Persist a state</li>
        <li>route views</li>
        <li>Set a reminder</li>
        <li>toggle task status</li>
      </ul>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About

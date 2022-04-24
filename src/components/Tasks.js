import Task from './Task'

// this maps through the array of 
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
         {tasks.map((task) => (
            <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onToggle={onToggle} 
            />))}
        </>
    )
}

export default Tasks

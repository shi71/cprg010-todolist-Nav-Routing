import React from 'react';

//import TodoForm from './TodoFormClass';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoCategory = (props) => {
    const { title } = props;
    //const tasks = ['Task 1', 'Task 2', 'Task 3'];
    const [tasks, setTasks] = React.useState(['Task 1','Task 2']);
    
    const onTaskAdded = (task) => {
        setTasks([...tasks, task]);
    }

    return (
        <>
            <h1>{title}</h1>
            <TodoForm onTaskAdded={onTaskAdded} />
            <TodoList tasks={tasks} />
        </>
    );
}

export default TodoCategory;
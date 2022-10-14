import React, {useState} from "react";
import ('./App.scss');

export function App(){
    //state to hold todo list items
    const [todos, setTodos] = useState(['wash dishes', 'wash car']);

    const newTask =(e)=>{
        e.preventDefault();
        const newTask = document.getElementById('task').value

        //if no task is entered do nothing
        if(newTask== ""){
            return;
        }

        //if task is entered add to list and display under todo section
        todos.push(newTask);
        const todoList = document.getElementById("todo");
        const newTodoLi = document.createElement('li');
        newTodoLi.innerHTML = newTask;
        todoList.appendChild(newTodoLi);
    }

    return(
        <div className="main_container">
            <header>
                <h1 className='logo'>To-do List</h1>
            </header>
            <div className='sub_container'>
                <h2>Add a new task</h2>
                <form onSubmit={newTask}>
                    <input className='sub_container-input' id='task' type='text'/>
                    <input type='submit'/>
                </form>
            </div>
            <div className='flexbox_container'>
                <div className='flexbox_container-item'>
                    <h4 className='flexbox_container-item-header'>To-Do</h4>
                    <ul id="todo">
                        {todos.map((todo,index) => {
                            return (
                                <li key={index}>{todo}</li>
                            );
                        })}                    
                    </ul>
                </div>
                <div className='flexbox_container-item'>
                    <h4 className='flexbox_container-item-header'>In Progress</h4>
                    <ul id="inProgress"></ul>
                </div>
                <div className='flexbox_container-item'>
                    <h4 className='flexbox_container-item-header'>Completed</h4>
                    <ul id="completed"></ul>
                </div>
            </div>
        </div>
    );
}

export default App;
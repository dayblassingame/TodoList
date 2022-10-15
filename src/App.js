import React, {useState} from "react";
import ('./App.scss');

export function App(){
    //state to hold todo list items
    const [todos, setTodos] = useState(['wash dishes', 'wash car']);

    const newTask =(e)=>{
        e.preventDefault();
        const newTask = document.getElementById('task');

        //if no task is entered do nothing
        if(newTask.value== ""){
            return;
        }

        //if task is entered add to list and display under todo section
        todos.push(newTask.value);
        const todoList = document.getElementById("todo");
        const newTodoLi = document.createElement('li');
        const newTodoLiButton = document.createElement('button');

        newTodoLiButton.innerHTML = newTask.value;
        newTodoLiButton.addEventListener("dblclick", moveToInProgress);
       
        newTodoLi.classList.add('todoList_item');
        newTodoLi.appendChild(newTodoLiButton);
        todoList.appendChild(newTodoLi);
        newTask.value = "";
    }

    const moveToInProgress =(e)=>{
        const inProgress = [];
        const newTaskInProgress = e.target.innerHTML;
        inProgress.push(newTaskInProgress);

        const deleteItem = e.target.parentElement;
        deleteItem.remove();

        const inProgressList = document.getElementById("inProgress");
        const newInProgressLi = document.createElement('li');
        const newInProgressLiButton = document.createElement('button');

        newInProgressLiButton.innerHTML = newTaskInProgress;
        newInProgressLiButton.addEventListener("dblclick", moveToCompleted);

        newInProgressLi.appendChild(newInProgressLiButton);
        inProgressList.appendChild(newInProgressLi);
    }

    const moveToCompleted =(e)=>{
        const completed = [];
        const newTaskCompleted = e.target.innerHTML;
        completed.push(newTaskCompleted);

        const deleteItem = e.target.parentElement;
        deleteItem.remove();

        const completedList = document.getElementById("completed");
        const completedLi = document.createElement('li');
        const completedLiButton = document.createElement('button');

        completedLiButton.innerHTML = newTaskCompleted;
        completedLi.appendChild(completedLiButton);
        completedList.appendChild(completedLi);
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
                                <li className="todoList_item" key={index}><button onDoubleClick={moveToInProgress}>{todo}</button></li>
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
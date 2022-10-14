import React from "react";
import ('./App.scss');
export function App(){
    return(
        <div className="main_container">
            <header>
                <h1 className='logo'>To-do List</h1>
            </header>
            <container className='sub_container'>
                <h2>Add a new task</h2>
                <input className='sub_container-input' type='text'/>
                <input type='submit'/>
            </container>
            <container className='flexbox_container'>
                <div className='flexbox_container-item'>
                    <h4>To-Do</h4>
                    <ul id="todo"></ul>
                </div>
                <div className='flexbox_container-item'>
                    <h4>In Progress</h4>
                    <ul id="inProgress"></ul>
                </div>
                <div className='flexbox_container-item'>
                    <h4>Completed</h4>
                    <ul id="completed"></ul>
                </div>
            </container>
        </div>
    );
}

export default App;
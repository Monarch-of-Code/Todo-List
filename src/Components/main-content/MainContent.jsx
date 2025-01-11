import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function MainContent() {

// Declairing the states where we can store the value of inputField when the user enter a task and converted to an JSON object
// Aslo we store the tasks in an array to display them in the UI

    const [tasks, setTasks] = useState(() => {
                                                const savedTasks = localStorage.getItem("tasks");
                                                return savedTasks ? JSON.parse(savedTasks) : [];
});

        const [newTask, setNewTask] = useState("");

// We declare the showAlert state to use it when user din't enter the task and hit enter it will the show the uer and alerDisplay

    const [showAlert, setShowAlert] = useState(false);

    // We use the useEffect hook for localStorage

    useEffect(() => {
                        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    //  Function for handel input change to take the user input and set it in setNewTask

    function handleInputChange(event){
        setNewTask(event.target.value);
    }


    // Function to add task and alert display

    function addTask() {
        if (!newTask.trim()) {
            setShowAlert(true);
        } else {
            setTasks(t => [...t, newTask]);
            setNewTask("");
            setShowAlert(false); 
        }
    };


    // Function for delete and task from the list and also from the localstorage

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }


    //  It handles the form's submition beahvior

    function handleSubmit(e){
        e.preventDefault();
    }
 

    // It handles the toggle on task, when user completes an task so he can click on that specific task and cut through the taks from the task list

    function handleToggle(e) {
         e.currentTarget.classList.toggle('toggle'); 
        }

    return(
        <>
        
        <div className='wrapper'>
            <div className='container'>
                <form className="input-btn" onSubmit={handleSubmit}>

                    <input type="text" 
                            placeholder='Enter Task'  
                            value={newTask} 
                            onChange={handleInputChange} />

                    <button className='addTask' onClick={addTask}>Add Task</button>
                </form>

                {/* This is for the alert display when ever the user hit enter or click on add task button without entering an task in the input field it will display this alert */}

                {showAlert && (
                                <div id="alertDisplay">
                                        <p>Please Enter A Task!</p>
                                </div>
                )}

                <div className='listContainer'>
                    <ul id="taskList" className="taskContainer">
                      {tasks.map((task, index) => 
                                                <li key={index} onClick={handleToggle} >
                                                    <span >{task}</span>
                                                    <button className='delTask' onClick={() => deleteTask(index)}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </li>)}
                    </ul>
                   
                </div>
            </div>
        </div>



        </>
    )
};

export default MainContent;
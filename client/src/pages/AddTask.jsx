import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './AddTask.css'




function AddTask() {
    const [difficulty, setDifficulty] = useState();
    const taskNameRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();




    const navigate = useNavigate()
    const submitted = async (e) => {
        e.preventDefault();
        console.log(taskNameRef.current.value);
        console.log(descriptionRef.current.value);
        console.log(dateRef.current.value);
        let task = {
            taskName: taskNameRef.current.value,
            discription: descriptionRef.current.value,
            dueDate: dateRef.current.value,
            difficulty
        }
        await axios.post("http://localhost:5000/api/tasks", task)
        console.log(task);
        navigate("/all-task")

    }
    return (
        <div>
            <Navbar />
            <div className="addtask">
                <h1>Add Task</h1>
                <div className="contents">
                    <form className="form" action="">
                        <div className="item">
                            <input ref={taskNameRef}
                                className="input"
                                type="text"
                                placeholder="Enter Task Name"
                            />
                        </div>
                        <div className="item">
                            <textarea ref={descriptionRef}
                                className="textarea"
                                placeholder="Enter Task Discription"
                            ></textarea>
                        </div>
                        <div className="item">
                            <label>due Date :</label>
                            <input ref={dateRef}
                                className="input-1" type="date" />
                        </div>
                        <div className="item">
                            <label>Difficulty :</label>
                            <div>
                                <input className="radio" onClick={() => { setDifficulty("Easy") }} type="radio" value="Easy" />
                                Easy
                            </div>
                            <div>
                                <input className="radio" onClick={() => { setDifficulty("Medium") }} type="radio" value="Medium" />
                                Medium
                            </div>
                            <div>
                                <input className="radio" onClick={() => { setDifficulty("Difficult") }} type="radio" value="Difficult" />
                                Difficult
                            </div>
                        </div>
                        <div className="footer">
                            <button className="btn" onClick={submitted} >Submit</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default AddTask;
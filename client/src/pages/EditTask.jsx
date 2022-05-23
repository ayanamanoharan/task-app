import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './EditTask.css'
import axios from 'axios';
import Navbar from '../components/Navbar'




function EditTask() {
    const location = useLocation()
    const [taskName, setTaskName] = useState(location.state.taskName)
    const [discription, setDiscription] = useState(location.state.discription)
    const [dueDate, setDueDate] = useState(location.state.dueDate)
    const [difficulty, setDifficulty] = useState(location.state.difficulty);

    const navigate = useNavigate()

    const submitted = async (e) => {
        e.preventDefault();
        let task = {
            taskName,
            discription,
            dueDate,
            difficulty
        }
        await axios.patch("http://localhost:5000/api/tasks/" + location.state.taskID, task)
        console.log(task);
        navigate("/all-task")
    }
    useEffect(() => {
        console.log(location.state);
    }, [])
    return (
        <div>
            <Navbar />
            <div className="edittask">
                <h1>Edit Task</h1>
                <div className="contents">
                    <form className="form" action="">
                        <div className="item">
                            <input onChange={(e) => setTaskName(e.target.value)}
                                className="input"
                                value={taskName}
                                type="text"
                                placeholder="Enter Task Name"
                            />
                        </div>
                        <div className="item">
                            <textarea
                                onChange={(e) => setDiscription(e.target.value)}
                                className="textarea"
                                value={discription}
                                placeholder="Enter Task Description"
                            ></textarea>
                        </div>
                        <div className="item">
                            <label>Due Date :</label>
                            <input className="input-1"
                                onChange={(e) => setDueDate(e.target.value)}

                                value={dueDate} type="date" />
                        </div>
                        <div className="item">
                            <label>Difficulty :</label>
                            <div>
                                <input className="radio" onClick={() => { setDifficulty("Easy") }} checked={difficulty == 'easy'} type="radio" value="Easy" />
                                Easy
                            </div>
                            <div>
                                <input className="radio" onClick={() => { setDifficulty("Medium") }} checked={difficulty == 'Medium'} type="radio" value="Medium" />
                                Medium
                            </div>
                            <div>
                                <input className="radio" onClick={() => { setDifficulty("Difficult") }} checked={difficulty == 'Difficult'} type="radio" value="Difficult" />
                                Difficult
                            </div>
                        </div>
                        <div className="footer">
                            <button className="btn" onClick={submitted}>Updated</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EditTask
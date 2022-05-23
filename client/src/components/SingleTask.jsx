import axios from "axios";
import React from "react";
import "./SingleTask.css";
import { useNavigate } from "react-router-dom";

function SingleTask(props) {
    const navigate = useNavigate();
    const editClick = async () => {
        navigate("/edit-task", { state: props.data });
    };
    const deleteTask = async () => {
        let response = await axios.delete(
            `http://localhost:5000/api/tasks/${props.data.taskID}`
        );
        console.log(response);
        window.location.reload();
    };

    const completed = async () => {
        let updatedStatus = { status: "completed" };
        await axios.patch(
            `http://localhost:5000/api/tasks/${props.data.taskID}`,
            updatedStatus
        );
        window.location.reload();
    };
    return (
        <div className="card">
            <div className="header">
                <p></p>
                <h1>{props.data.taskName}</h1>
                <button className="btn" onClick={completed}>
                    {" "}
                    Completed
                </button>
            </div>

            <hr />
            <div className="content">
                <div className="data">
                    <h2>{props.data.description}</h2>
                    <h2>{props.data.dueDate}</h2>
                    <h2>{props.data.difficulty} </h2>
                    <h2>{props.data.status} </h2>
                </div>
                <div className="options">
                    <button className="btn edit">
                        <a href="/edit-task" onClick={editClick}>
                            Edit
                        </a>
                    </button>
                    <button className="btn delete" onClick={deleteTask}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleTask;

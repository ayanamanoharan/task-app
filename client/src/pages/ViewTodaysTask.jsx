import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleTask from "../components/SingleTask";
import "./ViewTodaysTask.css";
import Navbar from "../components/Navbar";

function ViewTodayTask() {
    const [list, setList] = useState();
    const fetchAllTasks = async function () {
        let { data } = await axios.get("http://localhost:5000/api/tasks");
        const todaystasks = data.tasks.filter((single) => {
            let today = new Date();
            let taskDay = new Date(single.dueDate);
            if (
                today.getDay() == taskDay.getDay() &&
                today.getMonth() == taskDay.getMonth() &&
                today.getFullYear() == taskDay.getFullYear()
            ) {
                return single;
            }
        });
        setList(todaystasks);
    };
    useEffect(() => {
        fetchAllTasks();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="taskhead">
                <div className="list">
                    <h1>Todays Tasks</h1>
                    {list &&
                        list.map((obj) => {
                            return <SingleTask data={obj} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default ViewTodayTask;

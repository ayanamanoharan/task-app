import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SingleTask from "../components/SingleTask";
import "./ViewWeekTask.css";

function ViewWeektask() {
    const [list, setList] = useState();
    const fetchAllTasks = async function () {
        let { data } = await axios.get("http://localhost:5000/api/tasks");
        console.log(data.tasks);
        const todayObj = new Date();
        const todayDate = todayObj.getDate();
        const todayDay = todayObj.getDay();

        const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

        const lastDayOfWeek = new Date(firstDayOfWeek);

        lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
        console.log("dates ", firstDayOfWeek, lastDayOfWeek);
        const weeksTasks = data.tasks.filter((single) => {
            let taskDay = new Date(single.dueDate);
            if (taskDay >= firstDayOfWeek && taskDay <= lastDayOfWeek) {
                console.log(single);
                return single;
            }
        });
        setList(weeksTasks);
    };
    useEffect(() => {
        fetchAllTasks();
    }, []);
    return (
        <div>
            <Navbar />
            <div className="task">
                <div className="list">
                    <h1>Week Tasks</h1>
                    {list &&
                        list.map((singleTask) => {
                            console.log(singleTask);
                            return <SingleTask data={singleTask} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default ViewWeektask;

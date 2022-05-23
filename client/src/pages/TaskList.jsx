import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SingleTask from '../components/SingleTask'
import axios from 'axios'

function TaskList() {

    const [tasks, setTasks] = useState()

    const fetchAllTask = async () => {
        const response = await axios.get("http://localhost:5000/api/tasks")
        console.log(response.data);
        setTasks(response.data.tasks)
    }
    useEffect(() => {
        fetchAllTask();
    }, [])



    return (
        <div>
            <Navbar />
            <div className='taskhead'>
                <div className='list'>
                    <h1> All Tasks</h1>
                    {tasks &&
                        tasks.map((obj) => {
                            return <SingleTask data={obj} />
                        })



                    }
                </div>
            </div>
        </div>
    );
}

export default TaskList
import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="nav">
            <div className="left">
                <h1>TaskManager</h1>
            </div>
            <div className="right">
                <button className="btn">
                    <a href="/add-task">Add New Task</a>
                </button>
                <div className="dropdown">
                    <button className="btn dropbtn">
                        Tasks
                        <div className="dropdown-content">
                            <a href="/all-task">All Tasks</a>
                            <a href="/">Today Tasks</a>
                            <a href="/weeks-task">Week Tasks</a>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

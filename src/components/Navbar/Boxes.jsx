import React from "react";
import "./boxes.css";
const Boxes = () => {
    return (
        <div className="master">
            <div className="container">
                <div className="circle"></div>
                <div className="box" style={{ backgroundColor: "#f5f3f4" }}>
                    <h2>Events</h2>
                    <p>Click to know more about events</p>
                </div>
            </div>

            <div className="container">
                <div className="circle"></div>
                <div className="box" style={{ backgroundColor: "#d3d3d3" }}>
                    <h2>Events</h2>
                    <p>Click to know more about events</p>
                </div>
            </div>

            <div className="container">
                <div className="circle"></div>
                <div className="box" style={{ backgroundColor: "#f5f3f4" }}>
                    <h2>Events</h2>
                    <p>Click to know more about events</p>
                </div>
            </div>

            <div className="container">
                <div className="circle"></div>
                <div className="box" style={{ backgroundColor: "#d3d3d3" }}>
                    <h2>Events</h2>
                    <p>Click to know more about events</p>
                </div>
            </div>
        </div>

    );
};

export default Boxes;
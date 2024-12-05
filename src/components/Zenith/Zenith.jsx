import React from "react";
import "./Zenith.css";

const Zenith = () => {
    return (
        <div className="zenith-master">
            <div className="zenith-bg"></div>
            <div className="card-section">
                <div className="card" style={{ width: "20rem" }}>
                    <img src="web-dev.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>WEB DEVELOPMENT</h4>
                        <p className="card-text">
                        Web development creates and maintains websites, ensuring they are responsive, functional, and user-friendly.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: "20rem" }}>
                    <img src="dsa2.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>DATA STRUCTURE & ALGORITHM</h4>
                        <p className="card-text">
                        Data structures and algorithms organize and process data efficiently for problem-solving in programming.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: "20rem" }}>
                    <img src="ml.png.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>MACHINE LEARNING</h4>
                        <p className="card-text">
                        Machine learning uses algorithms to analyze data, learn from it, and make predictions or decisions without explicit programming.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: "20rem" }}>
                    <img src="ai.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>ARTIFICIAL INTELLIGENCE</h4>
                        <p className="card-text">
                        Artificial intelligence enables machines to mimic human intelligence, performing tasks like learning, problem-solving, and decision-making.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: "20rem" }}>
                    <img src="data.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>DATA SCIENCE</h4>
                        <p className="card-text">
                        Data science involves extracting insights from data using statistical analysis, algorithms, and machine learning to inform decision-making.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Zenith;


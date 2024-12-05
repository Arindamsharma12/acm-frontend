import React from "react";
import "./about.css";
const About = () => {
    return (
        <div className="container-box">
            <div className="about-section">
                <h1 className="title">ABOUT US</h1>
                <p className="content">The Association for Computing Machinery (ACM) at KCC Institute of Technology and Management is a vibrant community of technology enthusiasts dedicated to advancing the field of computing. As part of the world's largest educational and scientific computing society, we offer members opportunities to engage in workshops, hackathons, and collaborative projects, fostering skill development, networking, and innovation. Whether you're a beginner or an expert, joining ACM provides a platform to learn, connect, and lead in the ever-evolving tech landscape.</p>
            </div>

            <div className="signup-section">
                <h1 className="sub-heading">BECOME A MEMBER</h1>
                <button className="signup">SIGN UP</button>

                <h1 className="sub-heading">FOLLOW US</h1>
                <div className="social-media">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                </div>


            </div>

        </div>
    );
};

export default About;

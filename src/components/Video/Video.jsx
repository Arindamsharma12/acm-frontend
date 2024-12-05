import React from "react";
import "./video.css";
import About from "../About/About";
import video from '../../video/background_video.mp4'
import l from '../../img/logo2.0.png'
const Video = () => {
    return (
        <>
        <div className="master">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="logo">
                <img src={l} alt="" />
            </div>
        </div>
        <About/>
        </>
    );
};

export default Video;

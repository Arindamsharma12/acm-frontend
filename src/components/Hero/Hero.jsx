import React from 'react'
import './hero.css'
import video from '../../video/hero_bg.mp4'
import logo from '../../img/logo2.png'
const Hero = () => {
  return (
    <div className="master">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="logo">
                <img src={logo} alt="" />
                <h1 className="motto">EMPOWERING INNOVATORS, SHAPING THE FUTURE</h1>
            </div>
        </div>
  )
}

export default Hero

import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import "./home.css";
import Antra from "../Images/AntraC.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link } from 'react-router-dom'
// import Footer from '../Footer/footer'

function Home() {
  return (
      <div className="home-1">
        <div className="home-1-1"></div>
        <div className="home-1-2">
          <div className="home-1-2-1">
            <div className="home-card">
              <img src={Antra} alt="" />
              <p className="name">Antra Choubey</p>
              <p className="line"></p>
              <div className="card-b">
              <p className="chem">CHEMICAL ENGINEER</p>
              <p className="chem">IIT Roorkee</p>
              </div>
            </div>
            <div className="home-card-bottom">
              <a href="">
                <FaLinkedinIn />
              </a>
              {/* <a href="">
                <FaInstagram />
              </a> */}
            </div>
          </div>
          <div className="home-text">
            {/* <h1>Hello</h1> */}
            <p className="semi-head">Welcome!</p>
            <p className="semi-head">I am a Research Scholar</p>
            <div className="btn">
              <Link to='/resume'><button className="btn1"><a>RESUME</a></button></Link>
              <Link to='/projects'><button className="btn2"><a>PROJECTS</a></button></Link>
            </div>
            <p className="text-p">
            I am pursuing Ph.D in the Department of Chemical Engineering at Indian Institute of Technology Roorkee. Currently I am working under the supervision of Prof. Ashish Yadav. My research interests include 'fabrication of nanomaterials and nanocomposites for electrochemical energy storage applications'.
            </p>
          </div>
          <div className="h-mob"><Footer /></div>
        </div>
        <div className="h1"><Footer /></div>
      </div>
  );
}

export default Home;

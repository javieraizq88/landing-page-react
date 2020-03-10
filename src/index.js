import React from 'react';
import ReactDOM from 'react-dom';
// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import Navbar from "../components/navbar"
import Contact from '../components/contact';
import YanaPart from "../components/yanapart";
import "./index.css"
import HeadingOne from "../components/first-heading"
import Service from "../components/service"
import Portfolio from "../components/portfolio"

const Home = (props) => {
   
    return (
        <>
            <Navbar logoName="Start Boostrap" about="About" services="Services" portfolio="Portfolio" contact="Contact"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <YanaPart firstHeading="One Page Wonder" secondHeading="Will Knock Your Socks Off"/>
                    </div>
                </div>  
                <div className="container">
                    <HeadingOne textone="The First Heading" />
                 </div>  
                 <div className="container" imagendeldos="./img/1.jpg" titulounodeldos="The Second Heading Is Pretty Cool Too." titulodosdeldos="Will Catch Your Eye" parrafodos="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fucse">
                    <Service/>
                 </div>
                 <div className="container">
                    <Portfolio/>
                 </div>
                 <div className="container">
                    <div className="row">
                        <Contact />
                    </div>
                </div>
            </div>

        </>
    )
}

ReactDOM.render(<Home />, document.querySelector("#root"));
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
                    <HeadingOne text1="This First Heading " text2="Will Catch Your Eye" descrip="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quae, commodi odio itaque maiores accusamus quaerat molestias sit tenetur at!"
                     imagen="..\components\img\1.jpg" />
                 </div>  
                 <div className="container" >
                    <Service imagendeldos="../components/img/2.jpg" titulounodeldos="The Second Heading Is Pretty Cool Too." titulodosdeldos="Will Catch Your Eye" parrafodos="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fucse"/>
                 </div>
                 <div className="container">
                    <Portfolio titulo="Portafolio" descripTitulo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi cupiditate necessitatibus voluptas quae atque debitis modi ex! Repellendus enim excepturi perspiciatis quod itaque porro vero aut reiciendis nemo. Ex!"
                    imagen="../components/img/big-project-image.png"
                    project="Project Name"
                    descripcionFolio="Some quick example text to build on the card title and make up the bulk of the card's content."/>
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
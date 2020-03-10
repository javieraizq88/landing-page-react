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
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <YanaPart />
                    </div>
                </div>  
                <div className="container">
                    <HeadingOne />
                 </div>  
                 <div className="container">
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
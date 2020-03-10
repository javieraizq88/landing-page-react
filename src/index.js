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
import "./index.css"


const Home = (props) => {
    return (
        <>
            <span>Hola</span>
            <Navbar />
            <div className="container">
                <div className="row">

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
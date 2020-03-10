import React from "react"

const Navbar = (props) => {
    // const proprs = {
    //     logoName: "Start",
    //     about : "About",
    //     services : "Services",
    //     contact : "Contact"
    // }

    return (
        <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white-50" href="#">{props.logoName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text-white-50" href="#first_heading">{props.about} <span
                            className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-white-50" href="#second_heading">{props.services}</a>
                        <a className="nav-item nav-link text-white-50" href="#portfolio">{props.portfolio}</a>
    <a className="nav-item nav-link text-white-50" href="#message_form" tabIndex="-1">{props.contact}</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar 
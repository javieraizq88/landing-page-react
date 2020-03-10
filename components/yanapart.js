import React from "react";



const YanaPart = (props) => {
    return (
        <div className="card text-center yana">
            <div className="card-body">
            <p className="heading">{props.firstHeading}</p>
            <p className="heading2">{props.secondHeading}</p>
            </div>
        </div>
    )
};

export default YanaPart;
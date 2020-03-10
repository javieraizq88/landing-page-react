import React from 'react';

const Service = (props) => {
    const style = {

        borderRadius :"100%",
        width : "100%"

        }
    return (
        <>
        <div className="row mt-3" id="second_heading">
            <div className="col-4 text-center">
                <img src= {props.imagendeldos} className="" alt="..." style={style}/>
            </div>
            <div className="col-8 mt-2">
                <h1 className="">{props.titulounodeldos} <span className="text-secondary">{props.titulodosdeldos}</span></h1>
                <p className="lead">{props.parrafodos}</p>
            </div>
        </div>
        </>
    )
}

export default Service;
import React from 'react';

const HeadingOne = (props) => {
    return (
        <>
        <div className="row mt-3">
            <div className="col-8 mt-2">
                <h1 className="">{props.titulounodeldos} <span className="text-secondary">{props.titulodosdeldos}</span></h1>
                <p className="lead">{props.parrafodos}</p>
            </div>
            <div className="col-4 text-center">
                <img src= {props.imagendeldos} className="" alt="..." />
            </div>
        </div>
        </>
    )
}

export default HeadingOne;
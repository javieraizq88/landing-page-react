import React from 'react';

const Service = (props)  => {
    const props ={
        titulo1: "The Second Heading",
        titulo2: "Is Pretty Cool Too.",
        parrafo1: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fucse dapibus, tellus ac cursus commodo."
        imagen2: ".\components\img\2.jpg",
    } 

    const style = {
        width :"100%", 
        borderRadius: "100%"}
    return (
        <>
        <div className="row mt-3 stylish" id="second_heading">
            <div className="col-4 mt-2">
                <img src= {props.imagen2} style = {style} className="" alt="..." />
            </div>
            <div className="col-8 text-center">
                <h1 className=""> {props.titulo1} <span className="text-secondary">{props.titulo2}</span></h1>
                <p className="lead">{props.parrafo1}</p>
            </div>
        </div>
        </>
    )
}

export default Service;
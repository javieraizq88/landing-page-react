import React from 'react';

const Service = (props)  => {
    const style = {
        width :"100%", 
        borderRadius: "100%"}
    return (
        <>
        <div className="row mt-3 stylish" id="second_heading">
            <div className="col-4 mt-2">
                <img src=".\components\img\2.jpg" style = {style} className="" alt="..." />
            </div>
            <div className="col-8 text-center">
                <h1 className="">The Second Heading <span className="text-secondary">Is Pretty Cool Too.</span></h1>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fucse dapibus, tellus ac cursus commodo.</p>
            </div>
        </div>
        </>
    )
}

export default Service;
import React from 'react';

const HeadingOne = (props) => {
    const style = {

        borderRadius: "100%",
        width: "100%"

    }
    return (
        <>
            <div className="row mt-3 stylish" id="first_heading">
                <div className="col-8 mt-2">
                    <h1 className="">{props.text1}<span className="text-secondary">{props.text2}</span></h1>
                    <p className="lead">{props.descrip}</p>
                </div>
                <div className="col-4 text-center">
                    <img src={props.imagen} style={style} className="" alt="..." />
                </div>
            </div>
        </>
    )
}

export default HeadingOne;
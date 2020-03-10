import React from 'react';

const HeadingOne = (props) => {
    const style = {

        borderRadius :"100%",
        width : "100%"

        }
    return (
        <>
        <div className="row mt-3 stylish" id="first_heading">
            <div className="col-8 mt-2">
                <h1 className="">{props.textone} <span className="text-secondary">Will Catch Your Eye</span></h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quae, commodi odio itaque maiores accusamus quaerat molestias sit tenetur at!</p>
            </div>
            <div className="col-4 text-center">
                <img src=".\components\img\1.jpg" style={style} className="" alt="..." />
            </div>
        </div>
        </>
    )
}

export default HeadingOne;
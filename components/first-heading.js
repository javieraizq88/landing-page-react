import React from 'react';

const HeadingOne = (props) => {
    return (
        <>
        <div className="row mt-3">
            <div className="col-8 mt-2">
                <h1 className="">This First Heading <span className="text-secondary">Will Catch Your Eye</span></h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quae, commodi odio itaque maiores accusamus quaerat molestias sit tenetur at!</p>
            </div>
            <div className="col-4 text-center">
                <img src="./img/1.jpg" style="width: 100%;border-radius: 100%;" className="" alt="..." />
            </div>
        </div>
        </>
    )
}
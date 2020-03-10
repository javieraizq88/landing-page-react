import React from 'react';

const Portfolio = (props) => {
    const style = {
        width: "100%"
    }
    return (
        <>
            <div className="row mt-3 stylish" id="portfolio">
                <div className="col-12">
                    <h1>Portafolio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi cupiditate necessitatibus voluptas quae atque debitis modi ex! Repellendus enim excepturi perspiciatis quod itaque porro vero aut reiciendis nemo. Ex!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={style} >
                        <img className="card-img-top" src="../components/img/big-project-image.png" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="text-primary">Project Name</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={style}>
                        <img className="card-img-top" src="../components/img/big-project-image.png" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="text-primary">Project Name</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={style}>
                        <img className="card-img-top" src="../components/img/big-project-image.png" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="text-primary">Project Name</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
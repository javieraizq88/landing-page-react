import React from 'react';

const Portfolio = (props) => {
    const style = {
        width: "100%"
    }
    return (
        <>
            <div className="row mt-3 stylish" id="portfolio">
                <div className="col-12">
                    <h1>{props.titulo}</h1>
                    <p>{props.descripTitulo}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={style} >
                        <img className="card-img-top" src={props.imagen} alt="Card image cap" />
                        <div className="card-body">
                        <h4 className="text-primary">{props.project}</h4>
                        <p className="card-text">{props.descripcionFolio}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={style}>
                        <img className="card-img-top" src={props.imagen} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="text-primary">{props.project}</h4>
                            <p className="card-text">{props.descripcionFolio}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={style}>
                        <img className="card-img-top" src={props.imagen} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="text-primary">{props.project}</h4>
                            <p className="card-text">{props.descripcionFolio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
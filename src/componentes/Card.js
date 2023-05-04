import React from 'react';

//CREO EL OBJETO CARDSTYLE QUE CONTIENE LOS ESTILOS DE MI DIV
const cardStyle = {
    maxWidth: '300px',
    minWidth: '150px'
};


function Card(props){
    return (
        <>
        {/* ACA LE PASO EL OBJETO A LA PROPIEDAD STYLE */}
        <div style={cardStyle} className="card w-25 m-3" >
            <img src={props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{props.titulo}</h5>
                <p className="card-text text-center">{props.descripcion}</p>
                <button className="btn btn-success w-100">Comprame!</button>
            </div>
        </div>
        </>
    )
}



export default Card;
import React from 'react';

function Img(props){
    return (
    <>
    <div class="carousel-item active">
      <img src={props.img} class="d-block w-100" alt={props.alt} />
    </div>
    </>
        )
}

    export default Img;
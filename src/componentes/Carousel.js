import React from 'react';
import Img from './Img';

function Carousel(props){
    return (
        <>
<div id="carouselExample" class="carousel slide mx-auto w-50">
  <div class="carousel-inner w-100">
    <Img img="https://i1.wp.com/popartdiscos.com.ar/wp-content/uploads/2021/06/Massacre-Mariposa_baja.jpg?w=1200&ssl=1" 
      alt="Mariposa nuevo album"/>
    <Img img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ikluoZNaJmWU9wuUtohoEgHaHa%26pid%3DApi&f=1&ipt=ae8f8b1e97d5b4fc11c5add9ee15ee7f0aa4d961cff58e2ce0f718776d5344cd&ipo=images" 
    alt="Diferentes maneras"/>
    <Img img="https://d2r9epyceweg5n.cloudfront.net/stores/001/303/510/products/massacre-el-mamut-vinilo-verde1-e6edf6757fe0c5c28816559295764024-640-0.jpg" 
      alt="massacres Vinilos"/>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Carousel;
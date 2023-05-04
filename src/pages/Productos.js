import React from 'react';
import Card from '../componentes/Card';
import logo from '../logo.svg'

function Productos(){
    return (
        <>
        <Card titulo='React' imagen={logo} descripcion='El framework mas demandado'/>
        </>
    )
}

export default Productos;
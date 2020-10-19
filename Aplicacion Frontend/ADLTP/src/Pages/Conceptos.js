import React from "react";
import { Link } from "react-router-dom";
import Tabla from "../images/tabla.jpg";
import Div from "../images/division.png";
import Metal from "../images/metal.png";

function Conceptos(){
    return(
        <div class="contenido">
            <br></br>
        <h2 class="text-large font-weight-bold">Tabla periodica de los elementos</h2>
        <img src={ Tabla } width="700px" height="500px"></img>
        <p>Tal y como su nombre lo indica, esta tabla es una disposicion de todos los elementos quimicos ordenados por una serie de propiedades que se explicaran mas adelante</p>
        <p>Esta se divide en filas, llamadas periodos. Y en grupos, llamadas clases tal y como se aprecia en la imagen a continuacion</p>
        <h2 class="text-large font-weight-bold">Grupos y Periodos</h2>
        <img src={ Div } width="700px" height="500px"></img>
        <h2 class="text-large font-weight-bold">Categorias de elementos</h2>
        <p>Cada elemento puede ser categorizado con una de las siguientes clases:</p>
        <ul><li><mark>Metales:</mark> Muy buenos conductores de energia, brillantes, resistentes y maleables</li><li><mark>No metales:</mark> Poca o nula conductividad electrica</li><li><mark>Metaloides:</mark> Conductividad electrica media</li></ul>
        <img src={ Metal }></img>
        <p>Si deseas aprender un poco mas, puedes ver este video completamente aprobado por los desarrolladores de ADLTP1</p>
        <a href="https://www.youtube.com/watch?v=O-WlKmB1FEk">¡Aprende mas!</a>
        <br></br>
        <br></br>
        <p class="font-weight-bold">Ahora que aprendiste ¿Estas preparado para nuestro desafio?</p>
        <Link to ="/levels">
        <button class="btn btn-success">Actividad</button>
        </Link>
        </div>
    );
}

export default Conceptos
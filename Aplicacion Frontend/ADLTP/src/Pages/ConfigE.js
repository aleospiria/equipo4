import React from "react";
import { Link } from "react-router-dom";
import diagrama from "../images/diag.png";
import ejemplo from "../images/Ejemplo.jpg"

function ConfigE(){
    return(
        <div class="contenido">
            <br></br>
        <h2 class="text-large font-weight-bold">Configuracion Electronica</h2>
        <p>La <mark>Configuración Electrónica</mark> de los elementos es la disposición de todos los electrones de un elemento en los niveles y subniveles energéticos</p>
        <p>La Configuración Electrónica se escribe ubicando la totalidad de los electrones de un átomo o ion en sus orbitales o subniveles de energía. Recordemos que existen 7 niveles de energía: 1, 2, 3, 4, 5, 6 y 7. Y cada uno de ellos tiene, a su vez, hasta 4 subniveles de energía denominados s, p, d y f.</p>
        <img src={diagrama}></img>
        <h2 class="text-large font-weight-bold">¿Como usarlo?</h2>
        <p>Escribir la Configuración Electrónica del Manganeso (Mn):
PASO 1: Lo primero que debemos conocer es el Número Atómico (Z) del elemento en cuestión, en este caso, el Manganeso el cual nos indica la cantidad de protones.
Al tratarse de un átomo neutro, la cantidad de protones será igual a la cantidad de electrones.

PASO 2: El siguiente paso será ubicar la totalidad de los electrones en los orbitales correspondientes utilizando la Regla de las Diagonales.

Veamos: El Manganeso (Mn) tiene un número atómico Z=25, es decir, que tiene 25 protones y 25 electrones.

Siguiendo la Regla de las Diagonales escribimos la configuración electrónica (CE) del Mn de la siguiente manera:</p>
<img src={ejemplo}></img>
        <p>Si deseas aprender un poco mas, puedes ver este video completamente aprobado por los desarrolladores de ADLTP1</p>
        <a href="https://www.youtube.com/watch?v=aIvZ_pCkKNI">¡Aprende mas!</a>
        <br></br>
        <br></br>
        <p class="font-weight-bold">Ahora que aprendiste ¿Estas preparado para nuestro desafio?</p>
        <Link to ="/levels">
        <button class="btn btn-success">Actividad</button>
        </Link>
        </div>
    );
}

export default ConfigE
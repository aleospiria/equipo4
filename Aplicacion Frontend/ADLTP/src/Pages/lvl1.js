import React from 'react';
import { Link } from 'react-router-dom';
import tabla_periodica from "../images/tabla periodica.jpg";
import tabla_periodicasin from "../images/tabla periodica sin.png";
import css from '../Components/styles/general.css';

function lvl1() {
    return(
        <div class="contenido">
            <br></br>
        <h2 class="text-width-bold">Tabla periodica de los elementos</h2>
        <img src={tabla_periodica} width="600px" height="400px"></img>
        <br></br>
        <br></br>
        <h2 class="text-width-bold">¿En cuantas categorias se dividen los elementos?</h2>
        <br></br>
        <div class="form-check" id="opciones">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 5 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 3 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 2 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 1 </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={tabla_periodicasin} width="600px" height="400px"></img>
        <br></br>
        <br></br>
        <h2>¿Los periodos se pueden ver en las columnas o filas?</h2>
        <br></br>
        <div class="form-check" id="opciones">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> FILAS </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> COLUMNAS </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Tabla periodica de los elementos</h2>
        <img src={tabla_periodica} width="600px" height="400px"></img>
        <br></br>
        <br></br>
        <h2>¿Cuales son las categorias en las que se divide los elementos?</h2>
        <br></br>
        <div class="form-check" id="opciones">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> -Metales <br></br> -No Metales <br></br> -Metaloides <br></br> </label>
        <br></br>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> -Halogenos <br></br> -No Metales <br></br> -Metaloides </label>
        <br></br>
        <br></br>
        </div>
        <Link to="/levels">
        <button className="btn btn-success btn-lg" id="button_lvls">Finalizar</button>
        </Link>
        </div>
        
    );
    
}

export default lvl1;
import React from 'react';
import { Link } from 'react-router-dom';
import configuracion_electronica from "../images/configuracion electronica.png";
import css from '../Components/styles/general.css';

function lvl2() {
    return(
        <div class="contenido">
            <br></br>
        <h2>¿Cual es la configuracion electronica del Carbono?</h2>
        <br></br>
        <div class="form-check" id="opciones">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 1S2 2S2 2P2 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 1S2 2S3 2P2 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 1S2 2S2 2P4 </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={configuracion_electronica} width="600px" height="400px"></img>
        <br></br>
        <br></br>
        <h2>¿Cual es el maximo de electrones que acepta el nivel P?</h2>
        <br></br>
        <div class="form-check" id="opciones">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 2 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 14 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 6 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 10 </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={configuracion_electronica} width="600px" height="400px"></img>
        <br></br>
        <br></br>
        <h2>¿Cuantas S se pone como maximo en una configuracion electronica?</h2>
        <br></br>
        <div class="form-check" id="opciones">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 9 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 7 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 5 </label>
        <br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1"> 2 </label>
        </div>
        <Link to="/levels">
        <button className="btn btn-success btn-lg" id="button_lvls">Finalizar</button>
        </Link>
        </div>
        
    );
    
}

export default lvl2;
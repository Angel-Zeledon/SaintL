import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import "../Styles/Grados.css"
import Nav from "./Nav"



const Grados = (props) => {
    document.title=`STL-${props.grado}`

    
    return (
        <div className="sec">
            <Nav/>
            <section>
                <article className="materias">
                    <h2>Materias:{props.grado}</h2>
                    <hr/>
                    <div className="ms">
                      <Link to = {`/${props.grado}/${props.primera}`} ><h3>{props.primera}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.segunda}`}><h3>{props.segunda}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.tercera}`}><h3>{props.tercera}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.cuarta}`}><h3>{props.cuarta}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.quinta}`}><h3>{props.quinta}</h3></Link>
                    </div> 
                    <div className="ms">
                      <Link to={`/${props.grado}/:${props.sexta}`}><h3>{props.sexta}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.setima}`}><h3>{props.setima}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.octava}`}><h3>{props.octava}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.novena}`}><h3>{props.novena}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.decima}`}><h3>{props.decima}</h3></Link>
                    </div>
                    <div className="ms">
                      <Link to={`/${props.grado}/${props.unde}`}><h3>{props.unde}</h3></Link>
                    </div>

                </article>
                
                <article className="random">
                    <h2>Noticias</h2>
                    <hr/>
                    <div>
                        
                    </div>

                </article>

                <article className="noticias">
                    <h2>Novedades</h2>
                    <hr/>
                    <div>

                    </div>

                </article>
                
            </section>
    
            
        </div>
    )
}

export default Grados

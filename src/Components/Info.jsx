import React from 'react'


import "../Styles/Info.css"  
import Nav from './Nav'

const Info = () => {

    document.title="Informacion"

    return (
        <div>
            <Nav/>
         <section id="contenido">
             <img id="img"   src="/my-app/public/20200901_121038.jpg"/>

             <h2 className="Titulo1"><font >QUE ES SAINT MICHAEL LEARN?</font></h2>
             <p className="Parrafo1">Somos un sitio web en donde los estudiantes del colegio Saint Michael pueden encontrar de forma sencilla el contenido de todas las materias a lo largo del curso lectivo y tener esta informacion a su disposicion en todo momento.
 
             </p>
             <h2 className="Titulo2"><font >MISION</font></h2>
             <p className="Parrafo2">Queremos ayudar a los estudiantes facilitando el acceso al material usado en clases. De esta forma sera mas facil hacer las tareas respectivas y estudiar para examenes ya sea de la institucion o nacionales como FARO.Esto con el fin de ayudar en el desempeño y productuvidad de los estudiantes de una manera facil y comoda.</p>

             <h2 className="Titulo3"><font >COMO USAR?</font></h2>
             <p className="Parrafo3">Unicamente selecciona el grado al que necesite ingresar,esto abrira otra ventana con un menu con las materias correspondientes. Elige la materia correspondiente y tendra toda la informacion a la mano en todo momento y de una forma facil y sencialla  .</p>   
         </section>
         <footer>
             SaintMichael Learn &copy 2021
         </footer>
            
        </div>
    )
}

export default Info

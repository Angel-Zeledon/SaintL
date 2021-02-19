import React from 'react'
import {firebase} from '../firebase'

const Subir = () => {
    
  const[titulo,setTitulo] = React.useState("")
  const[profe,setProfe] = React.useState("")
  const[materia,setMateria] = React.useState("")
  const[grado,setGrado] = React.useState(0)
  const[info,setInfo] = React.useState("")

  const guardarDatos = async(e)=>{

    e.preventDefault()

    


    if(!titulo.trim()){
      alert("El titulo es obligatorio")
      return
    }
    if(!profe.trim()){
      alert("El Profesor es obligatorio")
      return
    }
    if(!materia.trim()){
      alert("La materia es obligatoria")
      return
    }
    
    if(!info.trim()){
      alert("La informacion es obligatorio")
      return
    }
       

    const Ingresar = async(titulo,profe,materia,grado,info)=>{
      let tarea = {
        titulo:titulo,
        profe:profe,
        materia:materia,
        grado:grado,
        info:info,
        fecha:Date.now()

      }
      try{
        let db = firebase.firestore()
        let data =  await db.collection('tareas').add(tarea) 
        alert("Se han subido los datos")
      } catch(error){
        alert(error)
       
      }         
    }

       Ingresar(titulo,profe,materia,grado,info)
       

   } 



    return (
        <div>
            
            <form onSubmit={guardarDatos}>
                <input
                  type="text"
                  placeholder="Profesor"
                  className="form-control mb-2"
                  onChange={ (e) =>{
                      setProfe(e.target.value)
                  }}
                  />
                  <select className="form-control mb-2 h-10" onChange={(e)=>{
                    setMateria(e.target.value)
                   }}>
                    
                    <option>Física</option>
                    <option>Biología</option>
                    <option>Química</option>
                    <option>Español</option>
                    <option>Educ. Física</option>
                    <option>Es. Sociales</option>
                    <option>Cómputo</option>
                    <option>Filosofía</option>
                    <option>Cívica</option>
                    <option>Inglés</option>
                    <option>Portugués</option>
                    <option>Matemática</option>
                    <option selected>Materia</option>
                 </select>
                  <select className="form-control mb-2 h-10" onChange={(e)=>{
                    setGrado(e.target.value)
                  }}>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option selected>Grado</option>
                 </select>
                  <input
                  type="text"
                  placeholder="Titulo"
                  className="form-control mb-2"
                  onChange={ (e) =>{
                    setTitulo(e.target.value)
                  }}
                  />
                  <textarea
                  placeholder="Informacion"
                  rows="15" 
                  cols="40"
                  className="form-control mb-2 h-10"
                  onChange={ (e) =>{
                    setInfo(e.target.value)
                  }}
                  />
                  
                  <button type="submit" className="btn btn-primary btn-block">Agregar</button>
            </form>
            
        </div>
        
    )

}

export default Subir

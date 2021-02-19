import React from 'react'
import {firebase} from '../firebase'
import { useParams } from 'react-router-dom'
import "../Styles/Materias.css"
import Nav from './Nav'


const Materias = (props) => {
   
    let grado = props.grado

    const[lista,setLista] = React.useState([])
    const{materia} = useParams()

    React.useEffect(async()=>{

        try{

            const db = firebase.firestore()
            const data = await db.collection('tareas').get()
            const datos = await data.docs.map(doc =>({id:doc.id,...doc.data()}))
            console.log(datos)

            let filtrada = datos.filter(item => item.materia==materia)
            let filtro = filtrada.filter(item => item.grado==grado)
           
            setLista(filtro)

        } catch (error){
            console.log(error)
        }

    },[])



    return (
        <div>
            <Nav/>
            <section>
            {
                lista.map((item) => {
                    return(
                        <div key={item.id} id="div">
                            <h3 className="m-2">De:{item.profe}</h3>
                            <h3 className="m-2">{item.titulo}</h3>
                            <h7 className="m-2">{item.fecha}</h7>
                            <p className="m-2">{item.info}</p>
                        </div>
                    )
                })
            }
            </section>

            
        </div>
    )
 

}




export default Materias
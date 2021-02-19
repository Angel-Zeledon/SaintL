import React from 'react'
import {firebase} from '../firebase'
import { Route, Redirect } from 'react-router'
import {withRouter} from 'react-router-dom'

const Login = (props) => {

    const[correo,setCorreo] = React.useState("")
    const[contra,setContra] = React.useState("")
    const[verificar,setVerificar] = React.useState(false)
    

    
    const Entrar = async(e)=>{

        e.preventDefault()

        if(!correo.trim()||!contra.trim()){
            alert("Hay que llenar los campos")
        }
        else if(correo=="Profesores@saintmichael.com" && contra=="PROFES2020"){
            props.history.push('/subir')
        }

        else if(correo=="Estudiantes@saintmichael.com" && contra=="Saint12345"){
            props.history.push('/Info')
        }else{
            setVerificar(true)
        }


    }

   

    return (
        <div className="mt-5 bg-light p-5">
        
        <hr/>
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <form onSubmit={Entrar}>
                    {
                        verificar ? (
                            <div className="alert alert-danger">
                                Datos incorrectos
                            </div>
                        ) : null
                    }
                    <input 
                        type="email" 
                        className="form-control mb-2"
                        placeholder="Ingrese Email"
                        onChange={ e => setCorreo(e.target.value) }
                        
                    />
                    <input 
                        type="password" 
                        className="form-control mb-2"
                        placeholder="Ingrese Contraseña"
                        onChange={ e => setContra(e.target.value) }
                        
                    />
                  
                    <button 
                        className="btn btn-sm btn-dark btn-block p-3"
                        type="submit"
                    >
                     Ingresar   
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Login)

import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'

const Formulario =() =>{
    return<section className='form'>
            <form>
                <h2>Editar Card:</h2>
                <CampoTexto title='Titulo' placeholder='Ingresar Titulo'/>    
                <CampoTexto title='Descripcion' placeholder='Ingresar Descripcion'/> 
                <CampoTexto title='Imagen' placeholder='Ingresar Imagen'/>   
                <CampoTexto title='Demo' placeholder='Ingresar Imagen'/>   
                <CampoTexto title='Repositorio' placeholder='Ingresar Repositorio'/>   
            </form>
        </section>

}

export default Formulario
import './CampoTexto.css'



const CampoTexto = (props)=> {
    console.log('Datos: ', props);
    return<div className='campo-texto'>
        <label>{props.title}</label>
        <input placeholder={props.placeholder}></input>
    </div>
}

export default CampoTexto
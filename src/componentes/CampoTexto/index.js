
import "./CampoTexto.css" //importando o css

//Arrow functions é melhor do que criar a função
const CampoTexto = (props) => { //props é como se fosse o parametro

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )
} //no placeholder eu concatenei com uma string
//onChange: ele vai chamar a função e sempre que alguem digitar algo no campo de texto a gente vai fazer um console.log no valor
export default CampoTexto

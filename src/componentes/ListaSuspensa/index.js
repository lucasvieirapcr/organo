import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required != " "} value={props.valor}>
                <option value= ""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )//temos uma função e para cada item que recebe por parametro, retorna uma option
    //MAP: percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento
}   //A KEY É UMA CHAVE UNICA, PARA ELE CONTROLAR A RENDERIZAÇÃO, ENTÃO USEI O PROPRIO NOME DO ITEM COMO CHAVE
    //onChange: é utilizado para que seja realizada determinada ação após alguma mudança
    //o target vai capturar o que foi digitado em um campo de input de um form
export default ListaSuspensa

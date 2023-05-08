//dumb components = QUANDO NÃO TEM NENHUM COMPORTAMENTO, ELE APENAS RECEBE PROPS E EXIBE NA TELA
import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const borda = {borderColor: props.corPrimaria}
    return (
        //SE COLABORADORES FOR MAIOR QUE 0, CRIE UM TIME, SE NÃO DEVOLVA TIME VAZIO
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time
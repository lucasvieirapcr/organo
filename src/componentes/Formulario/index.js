import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    //useState = permite que os componentes do React mantenham e atualizem seu estado interno
    //ele pega um valor, guarda e depois renderiza ele
    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')


    const aoSalvar = (event) => {
        event.preventDefault() //ESSE MÉTODO PREVINE O COMPORTAMENTO PADRÃO, ELE NÃO VAI RECARREGAR O SITE
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        //ISSO VAI SERVIR PARA LIMPAR O FORMULÁRIO DEPOIS DE CRIAR
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>  
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <CampoTexto obrigatorio={true}
                 label="Nome" 
                 placeholder="Digite o seu nome"
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}/>

                <CampoTexto obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto label="Imagens" 
                placeholder="Digite o endereço da imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}/>

                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" itens = {props.nomeTimes}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario
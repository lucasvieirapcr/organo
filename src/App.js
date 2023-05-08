import { useState } from 'react';
import Banner from './componentes/Banner'; //IMPORTANDO UM COMPONENTE
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programador',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }, 
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }, 
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }, 
    {
      nome: 'UX e Desing',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }, 
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }, 
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },  
  ]

  const [colaboradores, setColaboradores] = useState([]) 

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger //ele vai servir para parar o código e entender o que está acontecendo
    //criando um array novo com os antigos colaboradores e no final o novo
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario nomeTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      //O FILTER FOI O QUE FEZ O COLABORADOR FICAR NO LUGAR CERTO
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
    </div>
  );
}

export default App;

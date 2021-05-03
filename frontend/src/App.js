import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import api from '../src/service/api'
import { Component } from 'react';

class App extends Component{

    state = {
      computadores:[],
    }
    async componentDidMount(){
      const response = await api.get('/computador');
      console.log(response.data);
      this.setState({computadores: response.data});
    }


  render(){
   const {computadores} = this.state;

    return( 
      <div>
       <Table responsive="sm" striped bordered hover size="sm">
        <thead>
          <tr>
          <th>ID</th>
          <th>Nome Computador</th>
          <th>Ip Computador</th>
          <th>Setor</th>
          <th>Ramal</th>
         </tr>
        </thead>
        <tbody>
        {computadores.map((computador) => (     
    <tr key={computador._id}>
      <td>{computador._id}</td>
      <td>{computador.nomeComputador}</td>
      <td>{computador.ipComputador}</td>
      <td>{computador.setorFuncionario}</td>
      <td>{computador.ramalFuncionario}</td>
    </tr>
      ))}
  </tbody>
       </Table>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
*/
export default App;

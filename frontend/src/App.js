import './App.css';
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
        <h1>Listar os computadores</h1>
        {computadores.map(computador =>{
          <li key={computador.active = true}>
            <h2>
              <strong>Computador: </strong>
              {computador.nomeComputador}
            </h2>
          </li>
        })}
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

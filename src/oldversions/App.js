import React from 'react';

// Componente implementado através de uma função (Funcional)
/*function App() {
  return (
    <div>
       Hello World!
    </div>
  );
}*/

// O mesmo componente implementado através de uma classe (Funcional)
class App extends React.Component {

  state = {
    nome: 'Gleison',
    email: ''
  }

  render(){
    return (
      <div>
         Hello World {this.state.nome + " !"}

         <label>e-mail:</label>
         <input type="text" value={this.state.email} 
                onChange={(e) => this.setState({email: e.target.value}) } />

         O email digitado foi: {this.state.email}
      </div>
    );
  }
  
}

export default App;

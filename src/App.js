import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Frase/>
      <Pessoa
        nome="Rafael" 
        idade="26" 
        profissao="Programador" 
        photo="https:/via.placeholder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;

import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = "Maria"

  return (
    <div className="App">
      <SayMyName name={name}/>
      <Pessoa
        nome="Rafael" 
        idade="26" 
        profissao="Programador" 
        photo="https:/via.placeholder.com/150"
      />
    </div>
  );
}

export default App;

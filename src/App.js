import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Rafael'

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá {name}!!</h1>
      <HelloWorld/>
      <img src={url} alt='Imagem' />
    </div>
  );
}

export default App;

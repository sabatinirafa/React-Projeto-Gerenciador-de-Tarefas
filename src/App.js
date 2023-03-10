import './App.css';

function App() {

  const name = 'Rafael'

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá {name}!!</h1>
      <h3>Meu segundo app React</h3>
      <img src={url} alt='Imagem' />
    </div>
  );
}

export default App;

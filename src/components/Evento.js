function Evento(props) {
  
  function meuEvento() {
    console.log('Evento ativado'+props.n)
  }
  
  return(
    <div>
      <p>Clique para evento: </p>
      <button onClick={meuEvento}>Ativar evento!</button>
    </div>
  )
}

export default Evento
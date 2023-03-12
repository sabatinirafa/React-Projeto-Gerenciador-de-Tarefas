function Pessoa ({nome, idade, photo, profissao}) {
  return (
    <div>
      <img src={photo}/>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa
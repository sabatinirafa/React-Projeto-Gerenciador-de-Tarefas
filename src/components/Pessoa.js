function Pessoa ({nome, idade, photo, profissao}) {
  return (
    <div>
      <img src={photo} alt="sei la"/>
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa
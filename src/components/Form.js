function Form () {

  function cadastrarUser(e) {
    e.preventDefault()
    console.log('Cadastrado!')
  }

  return(
    <div>
      <h1>Meu cadastro: </h1>
      <form onSubmit={cadastrarUser}>
        <div>
          <input type='text' placeholder="Seu nome" />
        </div>
        <div>
          <input type='submit' value='Cadastrar' />
        </div>
      </form>
    </div>
  )
}

export default Form
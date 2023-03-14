import { useState } from "react"

function Form () {

  function cadastrarUser(e) {
    e.preventDefault()
    console.log('Cadastrado!')
    console.log(name)
    console.log(pwd)
  }

  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")

  return(
    <div>
      <h1>Meu cadastro: </h1>
      <form onSubmit={cadastrarUser}>
        <div>
          <label htmlFor="name">Digite seu nome: </label>
          <input 
            type='text' 
            id="name" 
            name="name" 
            placeholder="Seu nome" 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="pwd">Digite sua senha: </label>
          <input 
            type='password' 
            id="pwd" 
            name="pwd" 
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div>
          <input type='submit' value='Cadastrar' />
        </div>
      </form>
    </div>
  )
}

export default Form
import Item from "./Item"

function List (props) {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Rarri" ano_lancamento={1985}/>
        <Item marca="Lambo" ano_lancamento={1964}/>
        <Item />
      </ul>
    </>
  )
}

export default List
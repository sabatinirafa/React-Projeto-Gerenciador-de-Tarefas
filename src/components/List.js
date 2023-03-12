import Item from "./Item"

function List (props) {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Rarri"/>
        <Item marca="Lambo"/>
      </ul>
    </>
  )
}

export default List
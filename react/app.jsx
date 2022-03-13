const App = () => {
  const { value, increment, decrement } = useCustomHook()

  return (
    <div>
      <h3> { value } </h3>
      <button onClick={ increment }>+</button> <button onClick={ decrement }>-</button>
      <br/>
      <Cards />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
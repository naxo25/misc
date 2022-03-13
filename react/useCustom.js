const { useState, useEffect } = React

const useCustomHook = (initialState = 0) => {

  const [counter, setCounter] = useState(initialState)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  const [ users, setUsers ] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3').then(async response => {
      const users = await response.json()
      setUsers(users.results)
    })
  }, [])

  return {
    value: counter,
    increment,
    decrement,
    users
  }
}
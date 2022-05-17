import { useState } from "react"
import UserCard from "../components/UserCard"

function Home(props) {
  const { users } = props
  const [input, setInput] = useState("")

  const AllUsers = () => {
    return users.map((el) => {
      return (
        el.jobTitle.toLowerCase().includes(input.toLocaleLowerCase()) && (
          <UserCard key={el.id} user={el} />
        )
      )
    })
  }

  function handleChange(e) {
    setInput((prev) => e.target.value)
  }

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Search by job title"
        />
      </div>
      <div className="all-users">
        <AllUsers />
      </div>
    </div>
  )
}

export default Home

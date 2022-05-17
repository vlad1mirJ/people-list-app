import Home from "../components/Home"
import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import UserInfo from "../components/UserInfo"

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://randomapi.com/api/riex9ray?key=XM4G-3U3R-1BPM-S7MX")
      .then((res) => res.json())
      .then((data) => setUsers((prev) => data.results[0].users))
  }, [])
  return (
    <div>
      <h1 className="title">
        <Link to="/">People list App</Link>
      </h1>

      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route
          path=":userId"
          element={users.length > 0 && <UserInfo users={users} />}
        />
      </Routes>
    </div>
  )
}

export default App

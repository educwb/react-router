import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
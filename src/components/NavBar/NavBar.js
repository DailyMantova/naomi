import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Button from "react-bootstrap/Button"
import React from "react"

const NavBar = () => {
  const menuArr = [
    { name: "Home", path: "/", page: Home },
    { name: "Settings", path: "/settings", page: About },
    { name: "Support", path: "/support", page: Settings },
    { name: "About us", path: "/about-us", page: Support },
    { name: "Contacts", path: "/contacts", page: Contacts },
  ]

  return (
    <Router>
      <div>
        {menuArr.map((menuItem, index) => (
          <Link key={index} to={menuItem.path}>
            {menuItem.name}
          </Link>
        ))}
      </div>
      <div>
        <Routes>
          {menuArr.map((menuItem) => (
            <Route
              key={menuItem.path}
              path={menuItem.path}
              component={menuItem.page}
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default NavBar
function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Settings() {
  return <h2>Settings</h2>
}
function Support() {
  return <h2>Support</h2>
}
function Contacts() {
  return <h2>Contacts</h2>
}

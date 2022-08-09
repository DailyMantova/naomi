import { Col, Container, Row } from "react-bootstrap"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React from "react"

const NavBar = () => {
  const menuArr = [
    { name: "Home", path: "/", page: Home },
    { name: "Settings", path: "/settings", page: About },
    { name: "Support", path: "/support", page: Settings },
    { name: "About Us", path: "/about-us", page: Support },
    { name: "Contacts", path: "/contacts", page: Contacts },
  ]

  return (
    <Router>
      <div
        style={{
          textDecoration: "none",
          backgroundColor: "RGB(68, 68, 68)",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="ToDO1.png"
          alt="logo"
          style={{
            display: "flex",
            width: "200px",
            height: "45px",
            position: "absolute",
            left: 0,
          }}
        />
        <Form
          style={{
            position: "start",
            size: 13,
          }}
          className="d-flex"
        >
          <Form.Control
            type="search"
            style={{ fontFamily: "MV Boli" }}
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button
            style={{
              color: "RGB(25, 256, 256)",
              borderBottomColor: "RGB(25, 256, 256)",
              fontFamily: "MV Boli",
              textShadow: "3px 3px 7px RGB(25, 256, 256)",
            }}
            variant="outline-success"
          >
            Search
          </Button>
        </Form>
        {menuArr.map((menuItem, index) => (
          <Link
            style={{
              backgroundColor: "RGB(68, 68, 68)",
              color: "RGB(256, 256, 256)",
              fontFamily: "MV Boli",
              outline: "none",
              margin: 5,
              outlineWidth: 10,
              fontSize: 27,
              paddingLeft: 20,
              textDecoration: "none",
              textShadow: "3px 3px 7px RGB(25, 256, 256)",
            }}
            key={index}
            to={menuItem.path}
          >
            {menuItem.name}
          </Link>
        ))}
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

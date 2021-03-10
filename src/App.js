import "./App.css";
import MyPhotoProfile from "./Component/Profile/ProfilPhoto";
import MyFullName from "./Component/Profile/FullName";
import MyEmail from "./Component/Profile/Address";
import "./App.css";
//import React, { Component } from "react";
//import React from "react";
import { Navbar, Nav, Button, FormControl, Form, Card } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar bg="primary" variant="dark" style={{ width: "100%" }}>
                <Navbar.Brand href="#home">GoMyCode School</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        style={{ width: "400px" }}
                        type="text"
                        placeholder="Research result,student find"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            <Card style={{ width: "18rem", marginTop: "50px" }}>
                <MyPhotoProfile />
                <Card.Body>
                    <Card.Title>the student</Card.Title>
                    <Card.Text>
                        <MyFullName />
                    </Card.Text>

                    <Card.Text>
                        <MyEmail />
                    </Card.Text>
                    <Button variant="primary">Contact him</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;

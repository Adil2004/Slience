import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container,ButtonGroup, Table,Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
      </Nav>
      <Form inline>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Form>
      </Navbar.Collapse>
      </Navbar>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th colspan="3">Descriptions</th>
          <th>Basket Full info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Item</td>
          <td colspan="3">Mark</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>Item</td>
          <td colspan="3">Description</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>Item</td>
          <td colspan="3">Description</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>Item</td>
          <td colspan="3">Description</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>Item</td>
          <td colspan="3">Description</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>Item</td>
          <td colspan="3">Description</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
           </ButtonGroup>
           <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>Item</td>
          <td colspan="3">Description</td>
          <td>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="primary">Basket</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="info">Info</Button>
          </ButtonGroup>
          </td>
        </tr>
      </tbody>
    </Table>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    </div>
  );
}

export default App;

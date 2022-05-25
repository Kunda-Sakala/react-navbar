//Bootstrap Component Imports
import { Navbar,Nav, Container } from "react-bootstrap";
//Stylesheet
import '../styles/nav.css';
export default function MyNavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="">
            <Nav.Link href="#home" className="p-4 active">Home</Nav.Link>
            <Nav.Link href="#link" className="p-4">Services</Nav.Link>
            <Nav.Link href="#link" className="p-4">About us</Nav.Link>
            <Nav.Link href="#link" className="p-4">Contact</Nav.Link>
            <button className="btn loginbtn mt-2"> <i className="bi bi-box-arrow-in-right"></i> Login</button>
            <button className="btn signupbtn mt-2 mx-1"><i className="bi bi-person-plus-fill" style={{color: 'white'}}></i> Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

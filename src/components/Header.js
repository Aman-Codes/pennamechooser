import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand href="#home">Pen Name Chooser</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}



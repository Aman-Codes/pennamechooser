import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
  <Navbar fixed="top" bg="info" variant="dark">
    <Navbar.Brand href="#" className="title">
      <img
        src="../logo.svg"
        width="30"
        height="23"
        className="d-inline-block align-bottom"
        alt="Pen Name Chooser logo"
      /> Pen Name Chooser
    </Navbar.Brand>
  </Navbar>
  );
}

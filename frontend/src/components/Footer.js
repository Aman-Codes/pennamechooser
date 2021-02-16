import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
  <Navbar fixed="bottom" bg="info" variant="dark">
    <p className="text-center m-auto footer">Made with <span id="heart">&hearts;</span> by <a href="https://github.com/Aman-Codes" id="link">Aman Dwivedi</a></p>
  </Navbar>
  );
}

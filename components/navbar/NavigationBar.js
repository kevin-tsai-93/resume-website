import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{borderRadius: 3}}>
      <Navbar.Brand href="/">Resume</Navbar.Brand>
      <Navbar.Toggle style={{outline: "none"}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/darkmode">Dark Mode</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/connect4">Connect 4</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/snake">Snake Game in Excel</Nav.Link>            
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

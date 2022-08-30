import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/NavigationBar.css";
import logo from "../assets/images/logo1.png";

function NavigationBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="transparent" fixed="top" expand={expand} className="navbar-dark pt-2 pt-lg-3 pb-2 pb-lg-3">
          <div className="container-fluid px-3 px-lg-5">
            <Navbar.Brand id="navbarBrand" href="#" className="d-flex">
              <img src={logo} alt="logo" height="42px" className="align-top d-none d-lg-block ms-5 ps-1" />
              <img src={logo} alt="logo" height="30px" className="align-top d-lg-none d-md-block ms-1 mt-2" />
              <h4 className="d-none d-lg-block ms-2 mt-2 ">Security Department</h4>
              <h6 className="d-lg-none d-md-block ms-2 mt-3 ">Security Department</h6>
            </Navbar.Brand>
            <Navbar.Toggle id="navbarToggle" className="bg-transparent border-0 mt-2 fs-6 me-lg-5 p-0 ps-0 ps-lg-2" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="off-canvas bg-white mt-2 mt-lg-3 me-2 me-lg-5 rounded-3"
              style={{ height: 320, width: 230 }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="container" closeButton>
                <Offcanvas.Title className="off-title fs-6 fw-semibold" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navCanvas justify-content-start flex-grow-1">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <NavDropdown title="Services" className="" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;

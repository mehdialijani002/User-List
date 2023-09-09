import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import svg from "../../asset/images/crown.svg";
import home from "../../asset/images/home.png";
import user from "../../asset/images/user.png";
import error from "../../asset/images/warning.png";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="navigation-container">
          <Navbar.Brand href="#home">
            <img src={svg} />
          </Navbar.Brand>
          <Nav className="mr-auto p-3">
            <Nav.Link href="/" to="/" style={{ fontSize: "25px" }}>
              <img src={home} /> Home
            </Nav.Link>
            <Nav.Link href="/404" to="/404" style={{ fontSize: "25px" }}>
              <img src={error} /> 404 page
            </Nav.Link>
            <Nav.Link
              href="/userList"
              to="/userList"
              style={{ fontSize: "25px" }}
            >
              <img src={user} /> userList
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;

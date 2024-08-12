import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBrand from "../assets/images/logo.png";
import { FaTh } from "react-icons/fa";
import "../style/Navbar.css";
import Search from "./Search";
import data from "./CardData";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Navigationbar = () => {
  return (
    <div>
      <Navbar className="bgnavbar">
        <Container className="containernavbar">
          <div className="kontenerbrand">
            <Navbar.Brand className="navbarbrand">
              <Link to="/">
                <img className="logobrand" src={logoBrand} alt="" />
              </Link>
            </Navbar.Brand>
          </div>

          <Search placeholder="Mau cari apa?" data = {data.cardData}/>

          <Nav className="navbar">
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-button-dark-example1"
                className="dropdown"
              >
                <FaTh className="logosignin fontsmall" />
                <br />
                <span className="signuphome fontsmall">Sign Up</span>
              </Dropdown.Toggle>

              <Dropdown.Menu
                variant="dark"
                className="fontsmall dropdownmargin"
              >
                <Dropdown.Item>
                  <Link to="/login">
                    <button className="fulla">Sign In</button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/signup">
                  <button className="fulla">Sign Up</button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/aboutus">
                  <button className="fulla">Tentang Kami</button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/kelebihanpage">
                  <button className="fulla">Logout <RiLogoutBoxRLine/></button>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigationbar;

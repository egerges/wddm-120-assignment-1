// Importing styles
import './Header.css';

// Importing bootstrap components:
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import FormControl from 'react-bootstrap/FormControl';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Bingy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="flex-end">
                    {/* 
                        // For later implementation
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Movies" id="moviesScrollDownBar">
                                // APi for this is noot working anymore
                                <NavDropdown.Item href="#upcomingMovies">Upcoming</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#thisYearMovies">This Year</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#lastYearMovies">Last Year</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Tv Shows" id="tvshowsScrollDownBar">
                                // APi for this is noot working anymore
                                <NavDropdown.Item href="#upcomingMovies">Upcoming</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#thisYearSeries">This Year</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#lastYearSeries">Last Year</NavDropdown.Item>
                            </NavDropdown>
                        </Nav> 
                    */}
                    {/* <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default Header;
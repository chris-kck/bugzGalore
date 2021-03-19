import React from 'react'

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>BugzShop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <LinkContainer to='/'>
                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
              </LinkContainer>
              </Nav>
              
            </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>
  )
}

export default Header

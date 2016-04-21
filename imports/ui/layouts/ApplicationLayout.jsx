import React from 'react';
import { Nav, NavItem, Navbar} from 'react-bootstrap';


export class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
          <Navbar inverse>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">Home</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <NavItem eventKey={1} href="/feedlist">Your Subscribes</NavItem>
                      <NavItem eventKey={2} href="/knowledge">Your Knowldege</NavItem>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>

        <div>
          {this.props.content()}
        </div>
      </div>
    );
  };
}

import React, { Component } from 'react';
import { Link, scrollSpy } from 'react-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <div>
        <Navbar className="container" color="faded" dark fixed="top" expand="md">
          <NavbarBrand>
            <Link to="landing" smooth={true} duration={500}>TWO<strong className="color-red">FOR</strong>LOOPS</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar >
              <Fade top cascade opposite>
                <NavItem>
                  {
                    // Yes these throw errors, but needed for now
                  }
                  <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    <NavLink onClick={this.close}>About</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" to="services" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    <NavLink onClick={this.close}>Services</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    <NavLink onClick={this.close}>Contact</NavLink>
                  </Link>
                </NavItem>
              </Fade>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;

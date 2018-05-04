import React, { Component } from 'react';
import { Element } from 'react-scroll'
import { Row, Col } from 'reactstrap'
import { ContactForm } from './ContactForm';
import { Fade } from 'react-reveal';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Element id="contact" style={{ minHeight: "100%" }} className="h-100 container d-flex flex-column justify-content-between  contact">
                <div className="text-left header">
                    <Fade top>
                        <h1 className="text-uppercase">
                            Let's get in <span className="color-red">touch</span>
                        </h1>
                    </Fade>
                    <hr />
                    <Fade bottom>
                        <h3 className="text-right">We'll get <span className="color-red">right</span> back to you</h3>
                    </Fade>
                </div>
                <div>
                    <Row>

                        <Col md="6" className="order-md-12 text-center">
                        <Fade bottom cascade>
                            <div className="info">
                                <h3>Have the next big idea?</h3>
                                <h3>Need a website or app?</h3>
                                <h3>Need help getting started?</h3>
                            </div>
                            <div className="info">
                                <h3>We'd love to help!</h3>
                            </div>
                            <div className="info">
                                <h3>Fill out this form to get started</h3>
                            </div>
                            </Fade>
                        </Col>
                        <Col md="6" className="order-md-1">
                            <ContactForm />
                        </Col>
                    </Row>
                </div>
                <div className="text-center text-muted">
                    Made with love by Andrew
                    <p>Website repo can be found <a href="https://github.com/AJHenry/twoforloops">here</a></p>
                </div>
            </Element>
        );
    }
}

export default Contact;

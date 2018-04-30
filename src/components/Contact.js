import React, { Component } from 'react';
import { Element } from 'react-scroll'
import { ContactForm } from './ContactForm';
import { Fade } from 'react-reveal';

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
                        <h3 className="text-right">We'll get right back to you</h3>
                    </Fade>
                </div>
                <div>
                    <ContactForm />
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

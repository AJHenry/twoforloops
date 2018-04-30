import React, { Component } from 'react';
import { Element, Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <Element id="landing" className="h-100 container d-flex flex-column justify-content-between landing">
            <div></div>
                <div className="text-center">
                <div>
                    <span className="heading">TWO<strong className="color-red">FOR</strong>LOOPS</span>
                    </div>
                    <Fade top>
                    <div>
                        {
                            //This throws a warning for the "comment"
                        }
                    <span className="subheading"><span>/*<span className="color-red">TODO</span> coding pun to make us likeable*/</span></span>
                    </div>
                </Fade>
                </div>
                <Fade bottom>
                <div className="text-center">
                <Link to="about" smooth={true} duration={500} >
                <a href="">
                    <div className="color-red scroll-icons" >
                        <i className="fas fa-angle-down"></i>
                    </div>
                    </a>
                </Link>
                </div>
                </Fade>
            </Element>
        );
    }
}

export default Landing;

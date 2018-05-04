import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Fade } from 'react-reveal';
import { ProjCar } from './ProjCar';
import './Services.css';

class Services extends Component {
    render() {
        let nick_github = 'nicksmider';
        let andrew_github = 'ajhenry';
        return (
            <Element id="services" className="h-100 container d-flex flex-column justify-content-between">
                <div className="text-left header">
                    <Fade top>
                        <h1 className="text-uppercase">
                            Our <strong className="color-red">work</strong>
                        </h1>
                    </Fade>
                    <hr/>
                    <Fade bottom>
                        <div className="text-right">
                            <h3>Current <span className="color-red">Projects</span></h3>
                        </div>
                    </Fade>

                    <hr className="style-seven" />
                    <ProjCar username={nick_github}/>
                    <br/>
                    <ProjCar username={andrew_github}/>
                </div>

                <div>
                </div>
            </Element>
        );
    }
}

export default Services;

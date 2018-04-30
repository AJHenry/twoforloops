import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { DisplayCard } from './DisplayCard';
import { Element } from 'react-scroll';
import { Fade } from 'react-reveal';
import './About.css';
import andrew from './assets/andrew.jpg';

class About extends Component {
    render() {
        return (
            <Element id="about" style={{ minHeight: "100%" }} className="container d-flex flex-column justify-content-between  about">

                <div className="text-left header">
                    <Fade top>
                        <h1 className="text-uppercase">
                            What is two<strong className="color-red">for</strong>loops?
                    </h1>
                    </Fade>
                    <hr />
                    <Fade bottom>
                        <h3 className="text-right">a collaboration between <span className="color-red">Andrew Henry</span> and <span className="color-red">Nick Smider</span></h3>
                    </Fade>
                </div>

                <div className="">

                    <Row >
                        <Col style={{ padding: 50 }} className="text-center d-flex flex-column justify-content-around">
                            <Fade bottom cascade>
                                <div className="info-box">
                                    <h4>Creating <span className="color-red">New</span> and <span className="color-red">Interesting</span> Ideas</h4>
                                    <p>We are two students at the University of Pittsburgh looking for internships and other interesting job offers.</p>
                                </div>
                                <div className="info-box">
                                    <h4>Using <span className="color-red"> Modern</span> Technologies</h4>
                                    <p>Here are the languages and technologies we are experienced in</p>
                                    <div className="color-red languages" >

                                        <h1>
                                            <div>
                                                <i className="devicon-c-plain-wordmark"></i>
                                                <i className="devicon-csharp-plain"></i>
                                                <i className="devicon-android-plain"></i>
                                                <i className="devicon-typescript-plain"></i>
                                                <i className="devicon-java-plain"></i>
                                                <i className="devicon-postgresql-plain"></i>
                                            </div>
                                        </h1>

                                        <h1>
                                            <div>
                                                <i className="devicon-bootstrap-plain"></i>
                                                <i className="devicon-html5-plain"></i>
                                                <i className="devicon-css3-plain"></i>
                                                <i className="devicon-sass-original"></i>
                                                <i className="devicon-nodejs-plain"></i>
                                                <i className="devicon-react-original"></i>
                                            </div>
                                        </h1>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <h4><span className="color-red">Interested</span> in what you're reading?</h4>
                                    <p>Keep scrolling to see some of our projects</p>
                                </div>
                            </Fade>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center" >
                            <DisplayCard imgSrc={andrew} cardName="Andrew Henry" subTitle="Co-Founder" link="http://andrewh.xyz">
                                My Name is Andrew
                                </DisplayCard>
                            <DisplayCard reverse imgSrc={andrew} cardName="Nick Smider" subTitle="Co-Founder" link="http://smider.info">
                                My Name is Andrew
                                </DisplayCard>
                        </Col>
                    </Row>
                </div>

                <div></div>
            </Element>
        );
    }
}

export default About;

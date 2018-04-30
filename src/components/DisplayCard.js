import React from 'react';
import {
   Button, Row, Col
} from 'reactstrap';
import { Fade, Flip } from 'react-reveal';

export class DisplayCard extends React.Component {
  render() {
    let display;
    if (this.props.reverse) {
      display = (
        <Row style={{ padding: 20 }} >
          <Col md="6" className="d-flex align-items-center justify-content-center">
            <Flip right>
              <img width="100%" className="rounded-circle" src={this.props.imgSrc} alt="Profile" />
            </Flip>
          </Col>
          <Col md="6" className=" d-flex align-items-center justify-content-center">
            <Fade bottom>
              <div className="text-center">
                <h3>{this.props.cardName}</h3>
                <h4 className="text-muted">{this.props.subTitle}</h4>
                <Button color="danger" href={this.props.link}>Website</Button>
              </div>
            </Fade>
          </Col>
        </Row>
      );
    } else {
      display = (
        <Row style={{ padding: 20 }}>
          <Col md="6" className="order-md-12  d-flex align-items-center justify-content-center">
            <Flip left>
              <img width="100%" className="rounded-circle" src={this.props.imgSrc} alt="Profile" />
            </Flip>          </Col>
          <Col md="6" className="order-md-1  d-flex align-items-center justify-content-center">
            <Fade top>
              <div className="text-center">
                <h3>{this.props.cardName}</h3>
                <h4 className="text-muted">{this.props.subTitle}</h4>
                <Button color="danger" href={this.props.link}>Website</Button>
              </div>
            </Fade>
          </Col>

        </Row>
      );
    };
    return display
  };
};

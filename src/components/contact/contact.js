import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './contact.css';

import phone from '../../images/phone.svg';
import mail from '../../images/mail.svg';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact">
          <Grid>
            <Row>
              <h1>
            Would you like to
                <span className="highlight"> contact </span>
            me?
              </h1>
              <hr />
              <text>
              Ready to get to know me a little better?
                <br />
              Feel free to call me or send me an email!
              </text>
            </Row>
            <Row>
              <Col sm={6}>
                <Image src={phone} alt="phone" height="200" />
                <br />
                <text>512-550-0982</text>
              </Col>
              <Col sm={6}>
                <Image src={mail} alt="mail" height="200" />
                <br />
                <text>brianduongh@gmail.com</text>
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Contact;

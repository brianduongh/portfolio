import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import './contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = key => (event) => {
    const { target: { value } } = event;
    this.setState({ [key]: value });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <section id="contact">
        <div className="contact">
          <div className="contact-form">
          <h1>
            Would you like to
            <span className="highlight"> contact </span>
            me?
          </h1>
          <hr />
          <form>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="name"
                value={name}
                onChange={this.handleChange('name')}
              />
              <FormControl
                type="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange('email')}
              />
              <FormControl
                componentClass="textarea"
                style={{ height: 200 }}
                placeholder="message"
                value={message}
                onChange={this.handleChange('message')}
              />
            </FormGroup>
          </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;

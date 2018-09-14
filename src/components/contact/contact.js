import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import './contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleCancel = this.handleCancel.bind(this);

  handleSubmit = this.handleSubmit.bind(this);

  handleChange = key => (event) => {
    const { target: { value } } = event;
    this.setState({ [key]: value });
  }

  handleCancel() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  handleSubmit() {
    console.log('submmited');
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
              <Button onClick={this.handleSubmit}>Submit</Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

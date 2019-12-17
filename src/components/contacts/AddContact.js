import React, { Component } from "react";
import { Consumer } from "../../context";
import TextINputGroup from "../layout/TextINputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;

    const newContact = {
      id: uuid(),
      name,
      phone,
      email
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    // this clear the inputs after submitting
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    // to redirect to home page after adding a contact
    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextINputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter the name"
                    value={name}
                    onChange={this.onChange}
                  />

                  <TextINputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="put your email address here"
                    value={email}
                    onChange={this.onChange}
                  />

                  <TextINputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-danger btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

import React, { Component } from "react";
const Context = React.createContext();
// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Mahdi Xamani",
        email: "Mahdi@zamani.ir",
        phone: "913-410-7279"
      },
      {
        id: 2,
        name: "Lale Eskandari",
        email: "setare@zamani.ir",
        phone: "913-333-2222"
      },
      {
        id: 3,
        name: "Pooneh Eskandari",
        email: "lale@zamani.ir",
        phone: "912-410-1111"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

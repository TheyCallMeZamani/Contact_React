import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Mahdi Xamani",
        email: "Mahdi@zamani.ir",
        phone: "913-410-7239"
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
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;

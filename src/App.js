import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import { Provider } from "./context";
import AddContatc from "./components/contacts/AddContact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContatc />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;

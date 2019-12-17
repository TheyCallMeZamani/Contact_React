import React from "react";

export default props => {
  return (
    <div>
      {/* access parameter through URL in "about/:id" that we created in <Route> in the app.js */}
      {/* <h1 className="display-1"> {props.match.params.id} </h1> */}
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">A simple app to add contacts to it.</p>
      <p className="text-secondary">Version 1.0.0.00.0.0.00.0.0</p>
    </div>
  );
};

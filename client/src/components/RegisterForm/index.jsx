import React, { useState } from "react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState(0);
  const [lastName, setLastName] = useState(0);
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const [password1, setPassword1] = useState(0);
  const [email, setEmail] = useState(0);

  // handleSubmit = (e) => {
  //   console.log("yooo");
  // };

  return (
    <section className="container">
      <div className="row">
        <div className="col s3" />
        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" className="validate" />
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password1" type="password" className="validate" />
              <label for="password1">Confirm Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <button
            className="btn-small waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
        <div className="col s3" />
      </div>
    </section>
  );
}

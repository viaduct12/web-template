//title, start and end date, summary, attachments? school

import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "select_school" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="user_name" type="text" className="validate" />
                <label for="user_name">Username</label>
                {/*pulls user name from db */}
              </div>
              <div className="input-field col s6">
                <select className="browser-default" value={this.state.value} onChange={this.handleChange}>
                  <option value="select_school" disabled>Select school</option>
                  <option value="seattle">Seattle</option>
                  <option value="bothell">Bothell</option>
                  <option value="tacoma">Tacoma</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="title" type="text" className="validate" />
                <label for="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                ></textarea>
                <label for="textarea1">Description</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component, useState } from "react";
import Form from '../Form';
import './style.css';

const display = {
  display: "block"
};

const hide = {
  display: "none"
};
export default class Modal extends Component {
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    };
  }
  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    const modal = [];
    modal.push(
      <div
        id="modal1"
        className="modal modal-fixed-footer"
        style={this.state.toggle ? display : hide} 
      >
        <div className="modal-content">
          <h4>Agenda</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus eveniet sit culpa, animi repellat provident debitis modi fugiat sed? Libero quod nam placeat minima reiciendis nesciunt recusandae soluta dolores.</p>
          <Form/>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={this.toggle}
          >
            Agree
          </a>
        </div>
      </div>
    );
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
          onClick={this.toggle}
        >
          Post
        </a>
        {modal}
      </div>
    );
  }
}

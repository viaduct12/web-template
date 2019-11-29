import React, { Component } from "react";


  const display = {
    display: "block"
  };

  const hide = {
    display: 'none'
  };
export default class Modal extends Component {

  state = {
    toggle: 'false'
  }

  // toggle(e) {
  //   this.setState(prevState => {
  //     toggle: !prevState.toggle
  //   })
  // }
  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Post
        </a>

        <div id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

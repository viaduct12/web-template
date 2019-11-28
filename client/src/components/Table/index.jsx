import React, { Component } from 'react'

export class Table extends Component {
  render() {
    return (
      <div>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Title</th>
              <th>School</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>11/27/2019</td>
              <td>Lawrence</td>
              <td>HACKATHON</td>
              <td>Bothell</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

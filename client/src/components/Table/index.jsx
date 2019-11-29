import React, { Component } from "react";
import TableData from "../TableData";
import tests from "../../testing.json";
export default class Table extends Component {
  state = {
    tests
  };

  render() {
    return (
      <div>
        <table className="responsive-table">
          <thead>
            <th>Date</th>
            <th>Name</th>
            <th>Title</th>
            <th>School</th>
          </thead>

          <tbody>
            {/* <tr> */}
              {this.state.tests.map(test => {
                return (
                  <TableData
                    date={test.date}
                    name={test.name}
                    school={test.school}
                    title={test.title}
                  />
                );
              })}
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

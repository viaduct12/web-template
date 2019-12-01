import React, { useState, useEffect } from "react";
import TableData from "../TableData";
import tests from "../../testing.json";

export default function Table() {

  const [datas, setData] = useState(tests);
  
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
              {datas.map(data => {
                return (
                  <TableData
                    date={data.date}
                    name={data.name}
                    school={data.school}
                    title={data.title}
                  />
                );
              })}
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    );
  }

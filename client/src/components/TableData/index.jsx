import React from "react";
import { Link } from "react-router-dom";
export default function TableData(props) {
  return (
    <tr>
      <td>
        <Link to={`/discussion/${props.title}`}>{props.date}</Link>
      </td>
      <td>
        <Link to={`/discussion/${props.title}`}>{props.name}</Link>
      </td>
      <td>
        <Link to={`/discussion/${props.title}`}>{props.title}</Link>
      </td>
      <td>
        <Link to={`/discussion/${props.title}`}>{props.school}</Link>
      </td>
    </tr>
  );
}

import React from "react";

const Table = ({ students, delStudent}) => {
   return (
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          return (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.job}</td>
              <td>
                <button onClick={() => delStudent(student.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
   );
};

export default Table;
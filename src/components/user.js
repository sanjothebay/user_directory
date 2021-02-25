import React from 'react'
import { Table } from 'react-bootstrap';

function User (props) {
return(
  <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pic</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>1999</td>
    </tr>
  </tbody>
</Table>
  </div>
)
 


}

export default User;
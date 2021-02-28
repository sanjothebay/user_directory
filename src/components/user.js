import React from 'react'


function User (props) {
return(
    <tr>
      <td><img src={props.image}></img></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.Email}</td>
      <td>{props.Birthdate}</td>
    </tr>
)
 


}

export default User;
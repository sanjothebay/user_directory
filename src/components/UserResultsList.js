import React from 'react'


function User (props) {
return(
   //   {props.results.map((result) =>(
    <tr>
      <td><img alt="Employee" src={props.image}></img></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
      <td>{props.birthdate}</td>
    </tr>
//))}
)
 


}

export default User;
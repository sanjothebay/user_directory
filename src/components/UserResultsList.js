import React from 'react'


function User (props) {
return(
   //   {props.results.map((result) =>(
    <tr>
      <td><img src={props.image}></img></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td><a href={`mailto:${props.Email}`}>{props.Email}</a></td>
      <td>{props.Birthdate}</td>
    </tr>
//))}
)
 


}

export default User;
import React from 'react'
import axios from 'axios'

import { Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import { User } from "../model/User";

interface IViewAllUsersProps
 {
  
  users:User[],    //  in didMount
  errorMessage:string 
}

export class CrocodileComponent  extends React.Component<any,IViewAllUsersProps> 
 {
 
constructor (props: any)   // Default state values
{ 
  super(props)
  this.state = { //default  OOP constructor
    users: [],
    errorMessage: 'error message'
              }
}


  componentDidMount() 
  {

    axios.get(`https://jsonplaceholder.typicode.com/users`)   // Get - request - ZAPROS
    .then(response => response.data)
    .then((data) => 
     {
   
       this.setState({ users: data })
       console.log(this.state.users)
      })






      // Test
console.log( this.state.users)

  } //compDidmount
 
render()
{
return(
  <div>
    <h1>Crocodile Page</h1>
     <p> Hello</p>
{/*
     <ul>
        { this.state.users.map(person => <li>{person}</li>)}
      </ul>
*/}

      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>id</th>
      <th>username</th>
      <th>password</th>
      <th>firstname</th>
      <th>lastname</th>
      <th>email</th>
    
      <th>Action </th>
    </tr>
  </thead>
  <tbody>


      {
this.state.users.map(  (person, index) => 
   (
       <tr>
          
        <td><Link to={{pathname:`/user/${person.id}`, state: { uid: `${person.id}`}   }}>{person.id}</Link></td>
        <td>{person.userName}</td>
        <td>ANY</td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
       
        <td><Link to={{pathname:`/user-update/${person.id}`, state: { uid: `${person.id}`}   }}>update</Link> </td>
      </tr>
   )
                    )
}

</tbody>
</Table>



</div>
)}


 }
    

/*
render()
{
    var divStyle = {
      background: "white",
      //padding: "20px",
      margin: "20px"
      
    };
    
    return 
   (    

    )
  
  }


}
/**   <td><Link to={`/user/${person.userId}`   }>{person.userId}</Link></td> */


/**  <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link> */
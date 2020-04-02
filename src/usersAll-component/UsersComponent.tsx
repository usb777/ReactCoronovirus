import React, { SyntheticEvent } from 'react'
import { User } from "../model/User";
import axios from 'axios'

interface IViewAllUsersProps
 {
  
  users:User[],    //  in didMount
  errorMessage:string 
}
// Tester  -JEST 
export class UsersComponent extends React.Component<any, IViewAllUsersProps>{
 
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

    
    
   
   // this.props.currentUser.userId


   axios.get('http://ec2-18-216-91-68.us-east-2.compute.amazonaws.com:2002/users/' /**parameter */, 
   {  withCredentials: true,  } )
   .then(response => response.data)
   .then((data) => 
    {
   
      this.setState({ users: data })
      console.log(this.state.users) // for test
     })

   





} //component DidMount


    render()
{
return(
  <div>   

     <h1> All Users Info </h1>



</div>
)}
    




} //class
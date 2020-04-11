import React, { SyntheticEvent } from 'react';
import { UserRedux } from '../../model/UserRedux';
import { FormGroup, Label, Col, Input, Button, Card, CardText, CardTitle } from 'reactstrap';
import { Redirect } from 'react-router';


interface IUserIdProps{
    userById:UserRedux
    errorMessage:string
    UserByIdActionMapper:(uId:number)=>void
    uId:number // App.tsx in Route name
}
interface IuserIdState{
    userId:number
}

export class UsersByIdComponent extends React.Component<IUserIdProps,IuserIdState>{
   constructor(props:any){
   super(props)
   this.state = ({
       userId:0
   })
}




componentDidMount ()
{

    console.log("Hello world!")
    console.log(this.props.uId)
    console.log("notHello world!")

const uId =  this.props.uId
this.setState({userId:uId})

  return this.props.UserByIdActionMapper(this.state.userId)
 
 
}

/*

    getUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.UserByIdActionMapper(this.state.userId)
    }

    */




render(){

  let user = {
      
  }
    
    return(
    
         <Card>
                <CardTitle>{this.props.userById.username} {this.props.userById.name}</CardTitle>
                <CardText>{`Username: ${this.props.userById.username}`}</CardText>
                <CardText>{`Email: ${this.props.userById.email}`}</CardText>
                <CardText>{`User Id: ${this.props.uId}`}</CardText>
        </Card>
     
    )
}

}//end of class
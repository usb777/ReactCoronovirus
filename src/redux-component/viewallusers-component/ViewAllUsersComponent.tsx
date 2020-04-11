import React from 'react'
import { UserRedux } from '../../model/UserRedux';
import {Link} from 'react-router-dom' // <a href = '' >
/*
import { CardDeck } from '../general-components/card-deck-component/CardDeckComponent';
import { UserInfoComponent } from '../user-info/UserInfoComponent';
*/

import { Redirect } from 'react-router';
import { Table} from 'reactstrap'

interface IViewAllUsersProps {
    allUsers:UserRedux[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have users (redux store)
        if(this.props.allUsers.length === 0)
        {
                      
            this.props.getAllUsersActionMapper()
        }
           
        else {    }
    }

    render(){
       
      //Start Typescript

        let userDisplay = this.props.allUsers.map((person,index) => {
            return (  
                <tr>
                    <td>{person.id}</td>
                    <td>{person.email}</td>
                    <td>{person.name}</td>
                    <td>{person.username}</td>                    
                   <td><Link to={{ pathname: `/user/${person.id}` }}>update</Link> </td>
                

                </tr>
            )
        })

        // end Typescript
      //  console.log(userDisplay);
        return(



<Table striped bordered hover size="sm">   <thead>
                            <tr>
                                <th>id</th>
                                <th>email</th> 
                                <th>name</th>
                                <th>username</th>                                                              
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDisplay}
                        </tbody>
                    </Table>



            
        )
    }
}
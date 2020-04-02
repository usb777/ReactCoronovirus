import React, { SyntheticEvent } from 'react'
import {Link} from 'react-router-dom'

interface ISimpleInterfase   // use  it for state --> second insertation
{
  dan2: any;
}


//Hello world!!! 

export class FirstComponent extends React.Component<any/**props Interfase */,  any /**state interfase */>{
 
  constructor(props: any)  // between component variable
     {  // removing constructor will receive state variable null 
        super(props)  // need it !!!
        this.state = 
        {
          // dan2:""
          // test
        }


    }


    
componentDidMount ()  // React component  method  //after render loading
{
   // props - move variables between components
   // state  local 
   this.first()

   this.setState({dan2:"Im  state  dan2"})

   this.setState({dan3:"Im  state  from second"})

}


first ()
{
  console.log("first");
  
}

second()
{  // this.setState({dan3:"Im from state"})
  console.log("second")
}
third()
{
  console.log("third")
}


    render()
{
  this.second()
return(
  <div>
    <h1>Dan</h1>
     <p> I am First Component </p>
          {this.third}
     <Link to="/dan-project"> second</Link>
     <p>  {     this.state.dan2     } </p>


     <p>  {     this.state.dan3    } </p>
</div>
)}
    




} //class
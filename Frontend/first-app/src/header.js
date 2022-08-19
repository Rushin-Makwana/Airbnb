import React, { Component, Fragment } from 'react';
import './header.css'

class Header extends Component{
constructor(props){
        super(props)
        this.state ={
            
            keyword:'Text will display here',
        }}

        handle = (event)=>{
            //  console.log(event.target.value)
            this.setState({keyword:event.target.value? event.target.value: 'Text will display here'})   
            this.props.userText(event.target.value)
            }
render(){

    
    
    return( 
    <Fragment>
     <center>
    <h2>
        <h3 style={{backgroundColor: "blue", fontSize: "20px"}}></h3> 
    </h2>
    <input onChange={this.handle}/>
    </center>
    </Fragment>
    )
}
}
export default Header; 
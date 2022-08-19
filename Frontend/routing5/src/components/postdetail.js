import React from 'react';
import Post from './post'
const postdetails = (props) =>{
    console.log(props)
    return( 
        
    <div className='panel panel-info'>
        <div className='panel-heading'>
            <h3>Post Details Page</h3>
        </div>
            <div className='panel-body'>
    <center> <h2> Welcome to the {props.match.params.topic} Page</h2>
    
    <h3> You are on Page Number {props.location.search.split('=')[1]}</h3>
    </center>
                                    
    </div>
    </div>
    )
}
export default postdetails;
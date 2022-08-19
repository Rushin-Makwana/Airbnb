import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) =>{
    return( 
        
    <div className='panel panel-warning'>
        <div className='panel-heading'>
            <h3>Post Page</h3>
        </div>
            <div className='panel-body'>
    <center> <h2> Welcome to the Post Page</h2></center>
               <h3>Javascript</h3>
            <Link to={`/post/Javascript?pageNo=1`} className="btn btn-primary">Javascript</Link>
            <h3>React</h3>
            <Link to={`/post/React?pageNo=2`} className="btn btn-danger">React</Link>    
            <h3>Node</h3>
            <Link to={`/post/Node?pageNo=3`} className="btn btn-info">Node</Link>                       
    </div>
    </div>
    )
}
export default Post;
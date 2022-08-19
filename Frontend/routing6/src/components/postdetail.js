import React from 'react';
import Post from './post'
import {useParams,useSearchParams} from 'react-router-dom'
const Postdetails = (props) =>{
    let params = useParams()
    let [searchParams] = useSearchParams()
    return( 
        
    <div className='panel panel-info'>
        <div className='panel-heading'>
            <h3>Post    Details Page</h3>
        </div>
            <div className='panel-body'>
    <center> <h2> Welcome to the {params.topic} Page</h2>
    
    <h3> You are on Page Number {searchParams.getAll('pageNo')}</h3>
    </center> 
                                    
    </div>
    </div>
    )
}
export default Postdetails;
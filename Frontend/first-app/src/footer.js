import React from 'react';

const Footer = (props) =>{

    const mystyle = {
        header: {
            // backgroundColor: "darkBlue",
            fontSize: '20px'
        },
        footer:{
            color: 'cyan'
        }
    }
    return( 
    <div>
    <center> <h2 style={ mystyle.header}> &copy;Rushin Makwana {props.Year}{props.Month}</h2></center>
    <h3 style={mystyle.footer}> All rights reserved</h3> 
    </div>
    )
}
export default Footer;
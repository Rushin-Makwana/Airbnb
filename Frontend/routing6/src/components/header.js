import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) =>{
    return( 
    <div>
    <center> <h2> Welcome to React App !! </h2>
    <nav className="navbar navbar-inverse ">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="home"></a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"> <Link to="home">Home</Link></li>
      <li ><Link to="post">Post</Link></li>
      <li> <Link to="profile">Profile</Link></li>
    </ul>
  </div>
</nav>
  
    
    </center>
   
    </div>
    )
}
export default Header;
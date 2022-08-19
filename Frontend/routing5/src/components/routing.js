import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Post from './post';
import Profile from './profile';
import postdetails from './postdetail';

const routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            
                <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/post" component={Post}/>
                    <Route path="/post/:topic" component={postdetails}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            <Footer/>
        </BrowserRouter>
    )
}


export default routing;
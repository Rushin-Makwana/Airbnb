import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Post from './post';
import Profile from './profile';
import Main from './main';
import Postdetails from './postdetail';
const routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className="container">
            <Routes>
            <Route path="/" element={<Main/>}>
            <Route  index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route  path="post" element={<Post/>}/>
            <Route path="post/:topic" element={<Postdetails/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="*" element={
                        <div>
                            <center>
                                <h1>Not Found Page</h1>
                            </center>
                        </div>
                    }/>
            </Route>
            </Routes>
            </div>
                    
            <Footer/>
        </BrowserRouter>
    )
}


export default routing;
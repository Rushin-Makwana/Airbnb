import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Footer from './footer';
//CLass Component - use to call api, write logic as well as display content. Can Maintain the state 
class Home extends Component{
render()
{
    return( 
          <>
                  <Header/>
                       <h1>Hii from the first React </h1>
                    <Footer/>
          </>
          
          )
}} //Function Component (Dumb) - Cannot maintain the state, use to display content
// const Home = () =>{
//   return( 
//   <>
//           <Header/>
//                <h1>Hii from the first React </h1>
//             <Footer/>
//   </>
  
//   )
// }
export default Home;
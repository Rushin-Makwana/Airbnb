import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Footer from './footer';
import Product from './productDisplay';
import Json from  './db.json';
//CLass Component - use to call api, write logic as well as display content. Can Maintain the state 
class Home extends Component{
    constructor(){
        super()
        this.state ={
           heading:'React app',
            prodData: Json,
            filterData: Json
        }
    }
   
filterProduct = (Text)=>{
    let output = this.state.prodData.filter((item)=>{
        return item.name.toLowerCase().indexOf(Text)>-1
    })
    this.setState({filterData:output})
}
render()
{
    return( 
          <>
                  <Header userText={(data)=>{this.filterProduct(data)}}/>
                  <center> <h1>Hii from the {this.state.heading} </h1>

                      
                       <Product prodData = {this.state.filterData}/>
                       </center>
 
                    <Footer Year="2022" Month="Aug"/>
          </>
          
          )
}} 



//Function Component (Dumb) - Cannot maintain the state, use to display content
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
let express = require('express');
let app = express();
let dotenv = require('dotenv').config({path:'relative/path/to/your/.env'});
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
MongoUrl = "mongodb://localhost:27017"
// let MongoUrl = process.env.MongoUrl;
let db;

let port = process.env.port || 9870;


app.get('/', (req,res)=>{
    let islandid = Number(req.query.islandid)
    let query ={}
    if(query)
    {
        query = {island_id : islandid}
    }
    db.collection('island').find(query).toArray((err, result)=>{
   
        if(err) throw err
        res.send(result)
    })
    
    
})
// app.get('/:collections', (req,res)=>{          As code is almost same fro beach and pool, this can be done 
//     db.collection(req.params.collections).find().toArray((err, result)=>{
//         if(err) throw err
//         res.send(result)
//     })
    
// })
app.get('/beach', (req,res)=>{
    let beachid = Number(req.query.beachid)
    let query ={}
    if(query)
    {
        query = {beach_id : beachid}
    }
    db.collection('beach').find(query).toArray((err, result)=>{
        if(err) throw err
        res.send(result)
    })
    
    
})
app.get('/pool', (req,res)=>{
    let poolid = Number(req.query.poolid)
    let query ={}
    if(query)
    {
        query = {pool_id : poolid}
    }
    db.collection('pool').find(query).toArray((err, result)=>{
        if(err) throw err
        res.send(result)
    })
    
    
})


MongoClient.connect(MongoUrl, (err, client)=>{
    if(err) console.log('Error while connecting');
    db = client.db('airbnb');
    app.listen(port, (err) =>{
        if(err) throw err;
        console.log(`Express Server is listening on port ${port}`)
    })
})
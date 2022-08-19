let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors')
let MongoClient = mongo.MongoClient;
// MongoUrl = "mongodb://localhost:27017"
//let MongoUrl = process.env.MongoUrl;
let MongoUrl = process.env.MongoLiveUrl;
let db;
//middelware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors()) 
let port = process.env.PORT || 9870;


app.get('/', (req,res)=>{
    let islandid = Number(req.query.islandid)
    let gt = Number(req.query.gt)
    let lt = Number(req.query.lt)
    let sort = {Price:1}
    // console.log(sort);
    let query ={}
    if(lt && gt)
    {
        query = {$and:[{Price:{$gt:gt, $lt:lt}}]}
    }
    else if(islandid)
    {                                                                                               
        query = {island_id : islandid}
    }
    if(req.query.sort)
    {
        sort = {Price: req.query.sort }
    }
    db.collection('island').find(query).sort(sort).toArray((err, result)=>{
   
        if(err) throw err
        res.send(result)
    })
})    
     app.get('/island/:id', (req,res)=>{
        let islandid = Number(req.params['id'])
        let query ={}
        if(islandid)
        {                                                                                               
            query = {island_id : islandid}
        }
        db.collection('island').find(query).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
    app.get('/beach/:id', (req,res)=>{
        let beachid = Number(req.params['id'])
        let query ={}
        if(beachid)
        {                                                                                               
            query = {beach_id : beachid}
        }
        db.collection('beach').find(query).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
    app.get('/pool/:id', (req,res)=>{
        let poolid  = Number(req.params['id'])
        let query ={}
        if(poolid)
        {                                                                                               
            query = {pool_id : poolid}
        }
        db.collection('pool').find(query).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
// })
app.get('/:collections', (req,res)=>{        //  As code is almost same fro beach and pool, this can be done 
    let sort = {Price:1} 
    let beachid = Number(req.query.beachid) 
    let poolid = Number(req.query.poolid)
    let gt = Number(req.query.gt)
    let lt = Number(req.query.lt)
    
    let query ={}
    if(lt && gt)
    {
        query = {$and:[{Price:{$gt:gt, $lt:lt}}]}
    }
    else if(beachid)
    {
        query = {beach_id : beachid}
    }
    else if(poolid)
    {
        query = {pool_id : poolid}
    }
    if(req.query.sort)
    {
        sort = {Price :req.query.sort}
    }
    db.collection(req.params.collections).find(query).sort(sort).toArray((err, result)=>{
        if(err) throw err
        res.send(result)
    })

    
})

app.get('/bookings/:id', (req,res)=>{

    let id = mongo.ObjectId(req.params.id)
    console.log(id)
    let query = {}
    if(id)
    {
        query = {_id:id}
    }
    db.collection(req.params.id).find(query).toArray((err, result)=>{
        if(err) throw err
        res.send(result)
    })

})
app.post('/reservestays', (req,res)=>{
   
    db.collection('bookings').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send(result)
    }) 
})
app.get('/bookings', (req,res)=>{

    let email = req.query.email
    let query = {}
    if(email)
    {
        query = {email}
    }
    db.collection('bookings').find(query).toArray((err, result)=>{
        if(err) throw err
        res.send(result)
    })

}) 
app.put('/update-your-bookings/:id',(req,res)=>{
    let bid = Number(req.params.id)
    db.collection('bookings').updateOne(
        {_id:bid},{
        $set:{
            "beach_id": req.body.beach_id,
            "country_id" : req.body.country_id,
             "location" : req.body.location,
             "price" : req.body.price
        }},(err,result) =>{
            if (err) throw err;
            res.send('Booking is Updated ! Enjoy !');
        }
    )
})
app.delete('/cancelbooking/:id', (req,res) =>{
    let oid = mongo.ObjectId(req.params.id)
    db.collection('bookings').deleteOne({_id:oid}, (err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
// app.get('/beach', (req,res)=>{
//     let beachid = Number(req.query.beachid)
//     let query ={}
//     if(beachid)
//     {
//         query = {beach_id : beachid}
//     }
//     db.collection('beach').find(query).toArray((err, result)=>{
//         if(err) throw err
//         res.send(result)
//     })
    
    
// })
// app.get('/pool', (req,res)=>{
//     let poolid = Number(req.query.poolid)
//     let query ={}
//     if(query)
//     {
//         query = {pool_id : poolid}
        
//     }
//     db.collection('pool').find(query).toArray((err, result)=>{
//         if(err) throw err 
//         res.send(result)
//     })
    
    
// })


MongoClient.connect(MongoUrl, (err, client)=>{
    if(err) console.log('Error while connecting');
    db = client.db('Airbnb');
    app.listen(port, (err) =>{
        if(err) throw err;
        console.log(`Express Server is listening on port ${port}${MongoUrl}`)
    })
})
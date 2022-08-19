let express = require('express')
let app = express();
let bodyparser = require('body-parser')
let superagent = require('superagent')
let port = 9700;
let cors = require('cors');
let request = require('request')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use(cors());

app.get('/', (req,res)=>{
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=01ccaee9766fd61430b8">Login With Git </a>')
})

app.get('/profile',(req,res)=>{
    console.log(req.body)
    const code = req.query.code
    if(!code){
        res.send('Invalid Login')
    }
    superagent.post('https://github.com/login/oauth/access_token')
    .send({
        client_id:'01ccaee9766fd61430b8',
        client_secret: '486a513d4a2083487632b53a20ba790f3fc32c08',
        code: code
    })
    .set('Accept','application/json')
    .end((err, result)=>{
        if(err) throw err;
        let access_token = result.body.access_token
        const option ={
            uri: 'https://api.github.com/user',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `token ${access_token}`,
                'User-Agent' :'mycode'
            }
        }
        request(option, (err,response, body)=>{
            return res.send(body)
        })
    })
})
app.listen(port, ()=>{
    console.log(`Server is listening to post {port}`)
})
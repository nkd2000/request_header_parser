require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});
app.get('/api/whoami',(req,res)=>{
    let ipaddresss = req.ip;
    if(ipaddresss.startsWith('::ffff:')) ipaddresss = ipaddresss.substring(7);
    const languages = req.headers['accept-language'];
    const softwares = req.headers['user-agent'];
    res.json(
        {
            ipaddress:ipaddresss, 
            language:languages, 
            software:softwares
        }
    );
});



const listner = app.listen(process.env.PORT || 3000, ()=> {console.log(`App is listening on port ${listner.address().port}`)});
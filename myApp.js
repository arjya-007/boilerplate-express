let express = require('express');
let app = express();
console.log("Hello World");
app.get('/', (req, res) => {
   res.sendFile(__dirname+'/views/index.html');
});
app.use('/public',express.static(__dirname+'/public'));
app.get('/json',(req,res) => {
const env=process.env.MESSAGE_STYLE;
if(env=="uppercase"){
res.json({"message":"HELLO JSON"});
}
else{
res.json({"message":"hello json"});
}
});

































 module.exports = app;

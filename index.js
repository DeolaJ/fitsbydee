const express = require('express'); 
const path = require('path'); 
const app = express();
var port = process.env.PORT;
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/' , (req , res) => {
    res.redirect('/index.html'); 
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
// Since frontend is react app, to deploy to the Heroku-22 stack, code is from website below
// https://vel-lesikov.medium.com/deploying-migrating-static-create-react-app-project-to-heroku-22-stack-b19a4255ea7c
const express = require('express'); 
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'build'));
});

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(PORT, ()=>{
    console.log("Server is running on port: ", {PORT})
})
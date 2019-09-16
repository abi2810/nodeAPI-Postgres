const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

//dB Connection
const db = require('./postgresdb')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Sample api
app.get('/',(req,res) =>{
  res.json({info: 'Node.js,Express, and Postgres API'});
});

//Call all the functions in db.
app.get('/users',db.getUsers);//To get all users list
app.get('/users/:id',db.getUserById);//To get all users list
app.post('/users',db.createUser);//To create a new user
app.put('/users/:id', db.updateUser);//To edit an user details
app.delete('/users/:id', db.deleteUser);//To delete an user


//Port setup
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

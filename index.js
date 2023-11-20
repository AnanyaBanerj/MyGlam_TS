const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const secret = 'ananya';



app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());


// Connect to MongoDB
mongoose.connect('mongodb+srv://blog:ktEFMnKQlGM7yHjb@cluster0.xelihkb.mongodb.net/?retryWrites=true&w=majority');



app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Generate a salt
    const salt = bcrypt.genSaltSync(10); // 10 is the number of rounds to use for generating the salt

    // Hash the password with the generated salt
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new user with the hashed password
    const userDoc = await User.create({
      username,
      password: hashedPassword
    });

    res.json(userDoc);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  
  if (userDoc && bcrypt.compareSync(password, userDoc.password)) {
    const token = jwt.sign({ username, id: userDoc._id }, secret, { expiresIn: '1h' }); // Adjust expiresIn as needed
    res.cookie('token', token).json('ok');
  } else {
    res.status(400).json('Wrong credentials');
  }
});

//profile
app.get('/profile', (req,res) =>{
  const {token} = req.cookies;
  jwt.verify(token, secret, {} , (err,info) =>{
    if (err) throw err;
    res.json(info);
  } );
})

// Event handlers for MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
});

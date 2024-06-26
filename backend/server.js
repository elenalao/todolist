const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://csis3380:csis3380@cluster.vrcmqo4.mongodb.net/April2DB";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// import routes
const bookRouter = require('./routes/activities');

// adding /books to before all routes
app.use('/activity', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

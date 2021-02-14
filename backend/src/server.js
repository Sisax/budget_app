const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = 8080;
const router = require('./router');
const app = express();

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true },
  () => console.log('connected to mongoDB')
);

app.use(cors());
app.use(express.json());
router.route(app);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});

const express = require('express');
const cors = require('cors');
const PORT = 8080;
const router = require('./router');
const app = express();

app.use(cors());
app.use(express.json());
router.route(app);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});

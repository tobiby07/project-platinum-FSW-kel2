const express = require('express')
const app = express()
const port = 3000

const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const { usersRoute } = require('./routes/users');
const { dashboardRoute } = require('./routes/dashboard');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser())
app.use(express.static("public"));

app.use(usersRoute)
app.use(dashboardRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})
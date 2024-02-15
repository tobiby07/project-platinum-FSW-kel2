const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const { usersRoute } = require('./routes/users');
const { dashboardRoute } = require('./routes/dashboard');
var authRouter = require('./routes/auth');
const { productRoute } = require('./routes/products');
const { categoryRoute } = require('./routes/category');
const { orderItemRoute } = require('./routes/orderItem');
const { orderRoute } = require('./routes/order');

app.use(express.json());
app.use(cors({
  origin: '*',
}))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser())
app.use(express.static("public"));

app.use('/api/users', usersRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/auth', authRouter);
app.use('/api/products', productRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/order-items', orderItemRoute)
app.use('/api/order', orderRoute)
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})
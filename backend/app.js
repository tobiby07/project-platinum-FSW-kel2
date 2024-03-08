const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const { usersRoute } = require('./routes/users');
var authRouter = require('./routes/auth');
const { brandRoute } = require('./routes/brands');
const { productRoute } = require('./routes/products');
const { categoryRoute } = require('./routes/category');
const { orderItemRoute } = require('./routes/orderItem');
const { orderRoute } = require('./routes/order');
const { cartItemRoute } = require('./routes/cartItem');
//Swagger dengan YAML
const swaggerUiExpress = require('swagger-ui-express')
const fs = require('fs')
const YAML = require('yaml')
const swaggerTamlFile = fs.readFileSync('./documentation/swagger.yaml', 'utf8')
const swaggerYamlParsed = YAML.parse(swaggerTamlFile)

app.use(express.json());
app.use(cors({
  origin: '*',
}))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser())
app.use(express.static("public"));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', usersRoute)
app.use('/auth', authRouter);
app.use('/api/brands', brandRoute)
app.use('/api/products', productRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/order-items', orderItemRoute)
app.use('/api/order', orderRoute)
app.use('/images', express.static('images'))
app.use('/api/cartItem', cartItemRoute)
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerYamlParsed))

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})

module.exports = app
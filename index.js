const express = require("express");
const handlebars = require('express-handlebars')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const generateRandomProduct = require("./class/fakerContainer.js");

const PORT = 8080

const routerHandlebars = express.Router()
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const Products = require('./class/productClass')
const storeProducts = new Products()

const Messages = require('./class/messageClass');
const chat = new Messages()

const insertProducts = require("./db/mariaDB/insertProducts");

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main.hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')
app.set('views', './views')

const listProducts = generateRandomProduct(5)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routerHandlebars)



io.on('connection', async (socket) => {
  const message = await chat.loadMessage()
  socket.emit('messages', message)

  socket.on('message-new', async data => {
    await chat.saveMessage(data)
    const message2 = await chat.loadMessage()
    io.sockets.emit('messages', message2);
  });

  const products = await storeProducts.allProducts()
  socket.emit('products', products)

  socket.on('product-new', async (data) => {
    await storeProducts.saveProduct(data)
    io.sockets.emit('products', await storeProducts.allProducts());
  })

})

routerHandlebars

  .get('/api/productos-test', (req, res) => {
    res.render('faker', { listProducts })
  })

  .get('/', (req, res) => {
    const productsList = storeProducts.allProducts()
    res.render('home', { productsList })
  })

  .post('/', (req, res) => {
    const { name, price, url } = req.body
    const product = { name, price, url }
    insertProducts(product)
    res.redirect('/')
  })

app.use(express.static(__dirname + "/public"));

httpServer.listen(PORT, function () {
  console.log(`Servidor corriendo en Puerto ${PORT} http://localhost:8080`);
});
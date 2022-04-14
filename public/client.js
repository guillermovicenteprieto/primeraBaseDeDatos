// const Products = require ('./class/productClass')
// const storeProducts = new Products()
// const productsList = storeProducts.allProducts()

window.onload = () => {
  const socket = io();

  socket.on('messages', data => {
    loadMessages(data)
  });

  function loadMessages(data) {
    const html = data.map((elem, index) => {
      return (`<div class="msgsChat">
                <span class="email"><b>${elem.email}</b></span>
                <span class="dateMsg" >${elem.date}</span>
              </div>
              <div><span class="msg">${elem.text}</div>
              <hr>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
  }

  document.getElementById('chatForm').addEventListener('submit', (e) => {
    e.preventDefault()
    addMsg()
  })
  function addMsg() {
    console.log("nuevoMensaje")
    const newMsg = {
      email: document.getElementById('email').value,
      text: document.getElementById('text').value
    }
    socket.emit('message-new', newMsg)
  }

  socket.on('products', data => {
    loadProducts(data)
  });

  function loadProducts(data) {
    const html = data.map((elem, index) => {
      return (`<div class="product">
                <span class="name">${elem.title}</span>
                <span class="price">${elem.price}</span>
              </div>
              <hr>`)
    }).join(" ");
    document.getElementById('products').innerHTML = html;
  }


}
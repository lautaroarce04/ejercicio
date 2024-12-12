// Array de productos
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 35000, imagen: "../imagen/SUPER.jpeg" },
    { id: 2, nombre: 'campera', precio: 30000, imagen: "../imagen/SUPER2.webp" },
    { id: 3, nombre: 'botines', precio: 9000, imagen:  "../imagen/SUPER3.jpg" },
    { id: 4, nombre: 'medias', precio: 5000, imagen: "../imagen/SUPER4.jpg" }
];

// Cargar productos en el HTML
const productoLista = document.getElementById('producto-lista');
let carrito = [];

// Función para crear las tarjetas de productos
function mostrarProductos() {
    productos.forEach(producto => {
      
        productoLista.innerHTML += `
        <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
    `;
    
});
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Actualizar el total del carrito
function actualizarCarrito() {
    const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Finalizar la compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('Compra realizada con éxito');
        carrito = [];
        actualizarCarrito();
    } else {
        alert('El carrito está vacío');
    }
});

mostrarProductos()

function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `<li class="tarjeta">
            <img src="${arrayProductos[i].imagen}"
          <p> Prod: ${arrayProductos[i].nombre}</p>  
           <p> Precio: $${arrayProductos[i].precio} </p>
            <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
            <input type="number" id="entrada${i}" placeholder="Ingrese cantidad">
            <button id="btn${i}">Comprar</button>
        </li>`;
    }
    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i);
        });
    }
}
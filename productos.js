const productos = {
  creatina: [
    { id: 1, nombre: "Creatina Nutrex", precio: "$95.000", imagen: "Creatina_Nutrex.png", descripcion: "Creatina de alta calidad" },
    { id: 2, nombre: "Creatina Micronizada", precio: "$250.000", imagen: "Micronized_Creatine.png", descripcion: "Creatina micronizada para mejor absorción" }
  ],
  preentreno: [
    { id: 3, nombre: "Pre-workout C4", precio: "$120.000", imagen: "C4.png", descripcion: "Suplemento pre-entrenamiento C4" },
    { id: 4, nombre: "Intenze", precio: "$250.000", imagen: "intenze.png", descripcion: "Pre-entrenamiento Intenze" }
  ],
  proteina: [
    { id: 5, nombre: "Proteina Yava Labs", precio: "$250.000", imagen: "Proteina_Yava_Labs.png", descripcion: "Proteína de suero Yava Labs" },
    { id: 6, nombre: "Proteina Mass Tech", precio: "$250.000", imagen: "MASS_TECH_XTREME_6_LB.png", descripcion: "Proteína Mass Tech para aumento de masa" }
  ]
};

let estamosEnInicio = true;

// Mostrar productos filtrados
function mostrarProductos(productos) {
  const contenedor = document.getElementById('productos-container');
  contenedor.innerHTML = '';
  productos.forEach(producto => {
    contenedor.innerHTML += `
      <div class="oferta card">
        <img src="img/${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="precio">${producto.precio}</p>
        <p>${producto.descripcion}</p>
        <button>Agregar al carrito</button>
      </div>
    `;
  });
  activarBotonesCarrito(); // Si tienes una función para los botones
}

// Activar botones para agregar al carrito
function activarBotonesCarrito() {
  document.querySelectorAll(".oferta button").forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = boton.parentElement;
      const nombre = producto.querySelector("h3").innerText;
      const precio = producto.querySelector(".precio").innerText;
      const imagen = producto.querySelector("img").src;

      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push({ nombre, precio, imagen });
      localStorage.setItem("carrito", JSON.stringify(carrito));

      alert(`${nombre} se agregó al carrito 🛒`);
    });
  });
}

// Abrir/cerrar menú desplegable
document.getElementById("productosBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("productosMenu").classList.toggle("mostrar");
});

// Cerrar el menú si se hace clic fuera
window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.getElementById("productosMenu").classList.remove("mostrar");
  }
});

// ✅ Activar los botones en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  activarBotonesCarrito();
});

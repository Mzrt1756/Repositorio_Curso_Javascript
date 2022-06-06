//Clase de Productos de Tienda
class Producto{
    constructor(id, nombre, precio, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

}

window.onload = function () {

    //Declaracion de Variables
    let divRowTienda = document.getElementById("rowTienda");
    let divCarrito = document.getElementById("carrito");
    let arrayCarrito = [];
    let precioTotal = 0;
    let totalSpan = document.getElementById('total');
    let botonVaciar = document.getElementById('botonVaciar');
    let botonComprar = document.getElementById('botonComprar');
    

    //Creacion de Cards para productos en la base de datos del catalogo
    function creadorTienda (){
        baseDeDatos.forEach((producto)=>{
            let {id, nombre, precio, imagen, descripcion} = producto
            const divColProducto = document.createElement("div");
            divColProducto.className= "col-md-6 col-lg-4";
            divColProducto.innerHTML = `<div class="card mb-4 box-shadow border-dark">
            <img class="imgCardsTienda card-img-top img-fluid" alt="${nombre}" style="object-fit: cover; max-height: 350px;" src="${imagen}" data-holder-rendered="true">
            <div class="card-body">                       
            <ul class="list-group mb-3 ">
            <li class="list-group-item active bg-warning bg-opacity-50 text-dark text-center"><h5>${nombre}</h5></li>
            <li class="list-group-item border-dark"><p>${descripcion}</p></li>
            <li class="list-group-item active bg-warning bg-opacity-50 text-dark text-center p-1"><p class="font-weight-bold">$${precio}</p></li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
            <button type="button" id="botonEliminar${id}" class="btn btn-sm btn-warning text-white mx-1" idProducto="${id}">Eliminar del Carrito</button>
            <button type="button" id="botonAnadirProducto${id}" class="btn btn-sm btn-warning text-white mx-1" idProducto="${id}">Agregar al Carrito</button>
            </div>
            </div>
            </div>
            </div>`
            divRowTienda.appendChild(divColProducto)
            let botonEliminarProducto = document.getElementById(`botonEliminar${id}` );
            let botonAnadirProducto = document.getElementById(`botonAnadirProducto${id}`);
            botonAnadirProducto.addEventListener('click', anadirCarrito);
            botonEliminarProducto.addEventListener(`click`, eliminarCarritoProducto2); 
 
        });       
    }

    //Creacion Carrito
    function crearCarrito() {
        divCarrito.textContent = '';
        let carritoSinDuplicados = [...new Set(arrayCarrito)];
        carritoSinDuplicados.forEach(function (producto) {
            // Obtener producto de base de datos
            let miProducto = baseDeDatos.filter(function(productoBaseDatos) {
                return productoBaseDatos.id == producto;
            });
            let numeroUnidadesProducto = arrayCarrito.reduce(function (total, productoId) {
                return productoId === producto ? total += 1 : total;
            }, 0);
            // Crear nodo carrito
            let listProductoCarrito = document.createElement('li');
            listProductoCarrito.className= "list-group-item text-right mx-2";
            listProductoCarrito.innerText = `${numeroUnidadesProducto} x ${miProducto[0].nombre} - $${miProducto[0].precio}`;
            // Boton de borrar
            let botonEliminarProductoCarrito = document.createElement('button');
            botonEliminarProductoCarrito.className = "botonEliminarProductoCarrito btn btn-secondary mx-5";
            botonEliminarProductoCarrito.textContent = 'X';
            botonEliminarProductoCarrito.style.marginLeft = '1rem';
            botonEliminarProductoCarrito.setAttribute('item', producto);
            botonEliminarProductoCarrito.addEventListener('click', eliminarCarritoProducto);
            // agregamos a padres
            listProductoCarrito.appendChild(botonEliminarProductoCarrito);
            divCarrito.appendChild(listProductoCarrito);
            tooMuch(numeroUnidadesProducto);
        })
        localStorage.clear();   
        let arrayCompra = [];
        let index = 0;
        for (let producto of arrayCarrito){
            arrayCompra.push(baseDeDatos[(producto-1)]);               
        }
        for (let producto of arrayCompra){          
            let productoJson = JSON.stringify(producto);
            localStorage.setItem(`Producto ${index}`, productoJson);
            index++;
            console.log(producto)
        }
        let arrayCompraJson = JSON.stringify(arrayCompra);
        localStorage.setItem(`Carrito`, arrayCompraJson);
        
    }

    //Funcion Anadir Carro
    function anadirCarrito(){
        arrayCarrito.push(this.getAttribute('idProducto'))       
        crearCarrito();
        calcularTotal();
    }
    
    //Funcion Vaciar Carro
    function vaciarCarrito() {
        arrayCarrito = [];
        crearCarrito();
        calcularTotal();
    }

    //Funcion eliminar producto de carrito desde carrito
    function eliminarCarritoProducto() {
        // Producto a eliminar de carrito
        let id = this.getAttribute('item');
        arrayCarrito = arrayCarrito.filter(function (productoId) {
            return productoId != id;
        });
        crearCarrito();
        calcularTotal();
    }

     //Funcion eliminar producto de carrito desde tienda
     function eliminarCarritoProducto2() {
        // Producto a eliminar de carrito
        let id = this.getAttribute('idProducto');
        arrayCarrito = arrayCarrito.filter(function (productoId) {
            return productoId !== id;
        });
        crearCarrito();
        calcularTotal();
    }

    //Funcion calcular Precio Total
    function calcularTotal() {
        // Limpiar precio anterior
        precioTotal = 0;
        // Recorrer array del carrito
        for (let producto of arrayCarrito) {
            // De cada elemento obtenemos su precio
            let miProducto= baseDeDatos.filter(function(productoBaseDatos) {
                return productoBaseDatos.id == producto;
            });
            precioTotal = precioTotal + miProducto[0].precio;
        }
        let total = precioTotal.toFixed(0);
        totalSpan.textContent = total;
        precioTotal = precioTotal.toFixed(0);
        return precioTotal;
    }

    //Funcion realizar comprar
    function comprarCarrito(){
        calcularTotal();
        precioTotal == 0 ? swal("Debe agregar productos para realizar una compra.") : swal("¡Muchas gracias por su compra", " ", "success");
        
        /*localStorage.setItem("Precio Total a Pagar", precioTotal)
        let arrayCompra = [];
        let index = 0;
        for (let producto of arrayCarrito){
            arrayCompra.push(baseDeDatos[(producto-1)]);               
        }
        for (let producto of arrayCompra){          
            let productoJson = JSON.stringify(producto);
            localStorage.setItem(`Producto ${index}`, productoJson);
            index++;
            console.log(producto)
        }
        let arrayCompraJson = JSON.stringify(arrayCompra);
        localStorage.setItem(`Carrito`, arrayCompraJson);*/
        vaciarCarrito();
    }

    //Funcion cargar carrito al refrescar página 
    function refrescarCarrito(){
        if (arrayCarrito.length===0){
            let arrayNuevoCarrito = JSON.parse(localStorage.getItem("Carrito")) || []; 
            for(let producto of arrayNuevoCarrito){
                    arrayCarrito.push(producto.id);              
            }
            console.log(arrayCarrito)
        }
        calcularTotal();
    }

    //Funcion avisar al usuario que esta comprando demasiado
    function tooMuch(cantidad){
        cantidad > 3 ? swal("¡Su estómago puede sufrir graves riesgos!", "...de todas maneras no deje de comprarnos.") : swal("¡Buena Elección!", "¡Espero que lo disfrute mucho!", "success");
    }
    
    //Eventos
    botonVaciar.addEventListener("click", vaciarCarrito)
    botonComprar.addEventListener("click", comprarCarrito)
    

    creadorTienda();
    refrescarCarrito();
    crearCarrito();
}


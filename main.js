let nombrecliente = prompt("Hola! Ingresá tu nombre");

let pregunta = prompt("Hola " + nombrecliente + ", querés comprar algo? (si/no)");

const productos = [
    { id: 1, nombre: "iphone 11 64 GB", precio: 695 },
    { id: 2, nombre: "iPhone 12 64 GB", precio: 825 },
    { id: 3, nombre: "iPhone 13 125 GB", precio: 1020 }
]

let carrito = []

//con el while mi intención es que vuelva hacer la pregunta y siga sumando productos hasta que el usuario ponga salir, me hubiese gustado que vaya sumando el valor de los precios pero no supe como hacerlo
while (pregunta === "si" || pregunta === "SI" || pregunta === "Si" || pregunta === "sI") {
    const pregunta2 = prompt("Cuál producto querés? 1- iPhone 11 64 GB $695 // 2- iPhone 12 64 GB $825 // 3- iPhone 13 125 GB $1020 // 4- Salir (Ingresa la opción deseada 1, 2, 3 o 4)");

    if (pregunta2 == "4") {
        alert("Esperamos volver a verte")
        break;
    }

    else if (pregunta2 !== "1" || pregunta2 !== "2" || pregunta2 !== "3") {
        //aun cuando ingreso 1, 2 o 3 me tira "no es una opción válida" y no entiendo como arreglarlo y tambien ingresa en el array carrito cualquier dato que ingrese.
        alert("No es una opción válida")
    }

    let agregarAlCarrito = productos.find((producto) => producto.id == pregunta2);

    carrito.push(agregarAlCarrito);

    console.log(carrito);
}




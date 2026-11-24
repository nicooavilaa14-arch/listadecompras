let productos = [];

function agregar(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let precio = Number(document.getElementById("precio").value);

    if (nombre == "" || precio <= 0) 
    {
        Swal.fire
        ({
         icon: "error",
         title: "Oops...",
         text: "Something went wrong!"
        })

        return;
    };

    productos.push({nombre, precio});

    mostrar();

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    
}

function mostrar() {

    lista.innerHTML = "";

    let suma = 0;

    for (let i = 0; i < productos.length; i++) {

        let elemento = document.createElement("p");

        elemento.textContent = productos[i].nombre + " $" + productos[i].precio;
        
        elemento.onclick = function() {

            productos.splice(i, 1);

            mostrar();

        };

        lista.appendChild(elemento);

        suma = suma + productos[i].precio;

    }

    document.getElementById("total").textContent = suma;

}

document.getElementById("evento").addEventListener("submit", agregar)
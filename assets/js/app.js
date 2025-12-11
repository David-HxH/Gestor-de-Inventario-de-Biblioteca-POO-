document.addEventListener("DOMContentLoaded", () => {

    class Libro {
        
        constructor (titulo, autor, estado) {
            this.titulo = titulo;
            this.autor = autor;
            this.estado = estado;
        }

        mostrarInfo () {
            console.log(`El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`);
        }

    }

    const inventario = [];

    const agregarLibro = (titulo, autor, estado) => {
        const nuevoLibro = new Libro(titulo, autor, estado);
        inventario.push(nuevoLibro);
    }

    let confirmar = confirm("¿Desea agregar un nuevo libro al inventario?");
    
    while (confirmar) {
        const titulo = prompt("Ingrese el título del libro:").trim();
        const autor = prompt("Ingrese el autor del libro:").trim();
        const estado = prompt("Ingrese el estado del libro (disponible/prestado):").trim().toLowerCase();

        agregarLibro(titulo, autor, estado);

        confirmar = confirm("¿Desea agregar otro libro al inventario?");

        if (!confirmar) {
            console.log("Inventario final de libros:");
            for (const libro of inventario) {
                libro.mostrarInfo();
            }
        }
        
    }



});
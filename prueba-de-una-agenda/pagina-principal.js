let usuarios = {}
let contenido = {}

document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").val;
    const descripcion = document.getElementById("descripcion").val;
    const lugar = document.getElementById("lugar").val;
    const hora = document.getElementById("inicio-re", "final").val;
    let nombre = document.getElementById('name');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');


    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    tabla.innerHTML += `
        <tr>
          <td>${titulo}</td>
          <td>$${descripcion}</td>
          <td>$${lugar}</td>
          <td>$${hora}</td>
        </tr>
    `;
});
function agregar() {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const lugar = document.getElementById("lugar").value;
    const hora = document.getElementById("inicio-re", "final").value;

    if (titulo && descripcion && lugar && hora) {
        contenido.push({ titulo, descripcion, lugar, hora});
        limpiarCampos();
        actualizarTabla();
    } else {
        alert("Por favor completa todos los campos correctamente.");
    }
}
function actualizar() {
    const tabla = document.getElementById('tabla');
    tabla.innerHTML = "";

    contenido.forEach(p => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${p.titulo}</td>
            <td>${p.descripcion}</td>
            <td>${p.lugar}</td>
            <td>$${p.hora.toFixed(2)}</td>
        `;
        tabla.appendChild(fila);
    });
}
function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('lugar').value = '';
    document.getElementById('hora').value = '';
}
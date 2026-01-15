function agregar() {
    let producto = document.getElementById("producto").value;
    let rutina = document.getElementById("rutina").value;

    let errorProducto = document.getElementById("errorProducto");
    let errorRutina = document.getElementById("errorRutina");

    errorProducto.style.display = producto === "" ? "block" : "none";
    errorRutina.style.display = rutina === "" ? "block" : "none";

    if (producto === "" || rutina === "") return;

    let li = document.createElement("li");
    li.textContent = producto + " - " + rutina;

    document.getElementById("lista").appendChild(li);
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("producto").value = "";
    document.getElementById("rutina").value = "";
    document.getElementById("errorProducto").style.display = "none";
    document.getElementById("errorRutina").style.display = "none";
}

function limpiarLista() {
    document.getElementById("lista").innerHTML = "";
}

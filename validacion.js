

function validarFormulario() {
    var nombre = document.getElementsByName('name','apellido')[0].value;
    if (nombre.length < 6 || nombre.length > 10) {
        alert('Debe tener entre 6 y 10 caracteres.');
        return false; 
    }
    return true; 
}

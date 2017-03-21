
function agregar(){ //Función javascript paa agregar elementos a la lista
    var texto = document.getElementById('agregarFruta').value; // Se crea la variable que almacenará el valor del string que se inserte en el input
    var li=document.createElement('li'); //Se utiliza el método createElement para crear el nuevo elemento a guardar en la lista
    li.innerHTML=texto==''?'(vacio)':texto; //Se inserta el valor que tomó la variable texto a la lista
    document.getElementById('lista').appendChild(li); //Se muestra la lista con el nuevo elemento que se ha agregado
}

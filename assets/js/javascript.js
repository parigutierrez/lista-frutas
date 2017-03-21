
function agregar(){
    var texto = document.getElementById('agregarFruta').value;
    var li=document.createElement('li');
    li.innerHTML=texto==''?'(vacio)':texto;
    document.getElementById('lista').appendChild(li);
  }

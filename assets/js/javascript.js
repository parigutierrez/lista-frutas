
function agregar(){
    var texto = document.getElementById('agregarFruta').value;
    var li=document.createElement('li');
    li.innerHTML=texto==''?'(vacio)':texto;
    document.getElementById('lista').appendChild(li);
  }

  function borrar(){
    var lis = document.getElementById('lista').getElementsByTagName('li');
      for(var i=0; i<lis.length;i++){
          lis[i].onclick=function(){
              if(confirm('¿Deseas borrar este elemento de la lista?'))
              this.parentNode.removeChild(this);
            };
        }

    }

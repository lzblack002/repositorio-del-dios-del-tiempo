//mi contenedor de todos los datos
var biblioteca = new Array();

function guardar_libro(){
    //creacion objeto
    var libro = new Object();
    //propiedades
    libro.isbn = document.getElementById('txtid').value;
    libro.titulo=document.getElementById('txttitulo').value;
    libro.autor=document.getElementById('txtnombre del autor').value;
    libro.autor=document.getElementById('txtapellido del autor').value;
    libro.genero=document.getElementById('txtcategoria').value;
    libro.Pais=document.getElementById('txtprecio').value;
   
    biblioteca.push(libro);   
    presentarinformacion();
    
}

function presentarinformacion(){
    fila ="";
    var suma=0
    for (var dato in biblioteca) {
        fila+="<tr>"
        fila+="<td>"+biblioteca[dato].id+"</td>";
        fila+="<td>"+biblioteca[dato].titulo+"</td>";
        fila+="<td>"+biblioteca[dato].nombre  +"</td>";
        fila+="<td>"+biblioteca[dato].apellido +"</td>";
        fila+="<td>"+biblioteca[dato].categoria+"</td>";
        fila+="<td>"+biblioteca[dato].Precio+"</td>";
        fila+="</tr>"
        suma+=parseFloat( biblioteca[libro].precio);
    }
    fila+="Total $"+suma;
    document.getElementById('datos').innerHTML=fila;
    console.log(biblioteca);
}
//radio button
function show(){
    Element = document.getElementById("content");
    check = document.getElementById("check");
    if (check.checked){
        Element.style.display = 'block';
    }
    else{
        Element.style.display = 'none';
    }
}
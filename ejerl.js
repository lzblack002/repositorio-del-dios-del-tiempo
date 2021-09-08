function crear_matriz(){
    var numf=document.getElementById('F...').value;
    var numc=document.getElementById('C...').value;
    var Columns= new Array();

    

    tabla="";
    tabla+="<table>";
    var menor=100000, mayor=0;
    
    for(i=0; i<numf; i++){
        

        for(j=0; j<numc; j++ ){
        
            let numal = Math.floor(Math.random()*100);
            Columns=numal;
            tabla+="<td>"+Columns+"</td>";
            document.getElementById('table').innerHTML=tabla;

            

           if(Columns<menor){
               menor=Columns;
               
           }
           if(Columns>mayor){
               mayor=Columns;
               
           }

        }
            
            tabla+="<tr>"
            
            tabla+="</tr>";


    }

    Nmame.innerHTML+="N mayor: "+mayor+"<br>";
    Nmame.innerHTML+="N menor: "+menor+"<br>";

    console.log(menor);
    console.log(mayor);
}
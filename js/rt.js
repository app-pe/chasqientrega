
	var datos = [            
            {
            "numdisrecojo": "1",
            "nomdisrecojo": "BREÑA",
            "tarifa": "20"
            },     
            {
            "numdisrecojo": "2",
            "nomdisrecojo": "CERCADO DE LIMA",
            "tarifa": "20"
            },       
            {
            "numdisrecojo": "3",
            "nomdisrecojo": "COMAS",
            "tarifa": "20"
            },
            {
            "numdisrecojo": "4",
            "nomdisrecojo": "JESUS MARIA",
            "tarifa": "20"
            },
            {
            "numdisrecojo": "5",
            "nomdisrecojo": "LA MOLINA",
            "tarifa": "20"
            },     
            {
            "numdisrecojo": "6",
            "nomdisrecojo": "LINCE",
            "tarifa": "20"
            },    
            {
            "numdisrecojo": "7",
            "nomdisrecojo": "LOS OLIVOS",
            "tarifa": "20"
            },    
            {
            "numdisrecojo": "8",
            "nomdisrecojo": "MIRAFLORES",
            "tarifa": "20"
            },    
            {
            "numdisrecojo": "9",
            "nomdisrecojo": "SAN BORJA",
            "tarifa": "20"
            },    
            {
            "numdisrecojo": "10",
            "nomdisrecojo": "SAN ISIDRO",
            "tarifa": "20"
            },    
            {
            "numdisrecojo": "11",
            "nomdisrecojo": "SAN JUAN MIRAFLORES",
            "tarifa": "20"
            },  
            {
            "numdisrecojo": "12",
            "nomdisrecojo": "SAN MARTIN DE PORRES",
            "tarifa": "20"
            },  
            {
            "numdisrecojo": "13",
            "nomdisrecojo": "SURCO",
            "tarifa": "20"
            },  
            {
            "numdisrecojo": "14",
            "nomdisrecojo": "VILLA MARIA",
            "tarifa": "20"
            }                   
            ];

// cargamos la funcion al inicio
      window.onload = llenardatos();

      function llenardatos() {
              for(var i = 0; i < datos.length; i++){     


    chart += `<select id="recojo" class="form-control" onchange="distritoRecojo();">
                <option selected>seleccione</option>
                <option value="1">BREÑA</option>
                <option value="2">CERCADO DE LIMA</option>
                <option value="3">COMAS</option>
                <option value="4">JESUS MARIA</option>
                <option value="5">LA MOLINA</option>
                <option value="6">LINCE</option>
                <option value="7">LOS OLIVOS</option>
                <option value="8">MIRAFLORES</option>
                <option value="9">SAN BORJA</option>
                <option value="10">SAN ISIDRO</option>
                <option value="11">SAN JUAN MIRAFLORES</option>
                <option value="12">SAN MARTIN DE PORRES</option>
                <option value="13">SURCO</option>
                <option value="14">VILLA MARIA</option>
              </select>`     

      chart += "<div class='card' id='prod"+i+"'>"+
                  "<div class='row'>"+
                    "<div class='col-md-4'>"+
                      //"<img src='img/cerveza/pilsen/pilsen"+i+".jpg' class='card-img' alt='...'>"+
                      "<img src='img/"+datos[i].imagen+"' class='card-img' alt='...'>"+
                    "</div>"+
                    "<div class='col-md-8'>"+
                      "<div class='card-body'>"+      
                        "<div class='row'>"+
                          "<h5 class='card-title' id='desProducto"+i+"'>"+datos[i].producto+"</h5>"+
                        "</div>"+
                        "<div class='row'>"+
                          "<p class='card-text'>Precio: S/&nbsp;</p>"+
                          "<p class='card-text' id='desPrecio"+i+"'>"+datos[i].precio+"</p>"+
                        "</div>"+
                        "<div class='form-group row'>"+
                          "<input type='button' value='-' class='qtyminus' field='quantity' id='btnmenos"+i+"' onclick='disminuirCantidad("+i+")' />"+
                          "<input type='text' name='quantity' value='1' class='qty' id='txtcant"+i+"' style='width:30px;text-align: center;' readonly='readonly' />"+
                          "<input type='button' value='+' class='qtyplus mr-2' field='quantity' id='btnmas"+i+"' onclick='aumentarCantidad("+i+")' />"+                        
                          "<button class='btn btn-danger btn-sm' type='submit' id='btnagregarCarrito"+i+"' onclick='agregarCarrito("+i+")'>AGREGAR</button>"+
                        "</div>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>";    

              }   
              document.getElementById("seccionProd").innerHTML = chart;    
      }



function distritoRecojo(){
	// obtener valor
	var cod = document.getElementById("recojo").value;
	// obtener texto
	var combo = document.getElementById("recojo");
	var selected = combo.options[combo.selectedIndex].text;
	return cod;
}

function distritoEntrega(){
	// obtener valor
	var cod = document.getElementById("entrega").value;
	// obtener texto
	var combo = document.getElementById("entrega");
	var selected = combo.options[combo.selectedIndex].text;
	
}

function tarifa(){
	var codi = distritoRecojo();
	console.log(codi);

	if(document.getElementById("recojo").value == document.getElementById("entrega").value){
		alert("iguales");
	}

	if(document.getElementById("recojo").value != document.getElementById("entrega").value){
		//breña
		if((1 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((1 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((1 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((1 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((1 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((1 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((1 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "23";			
		}
		if((1 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "23";			
		}
		if((1 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((1 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((1 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((1 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "27";			
		}
		if((1 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		//cercado lima
		if((2 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((2 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((2 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((2 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((2 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((2 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((2 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((2 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((2 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((2 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((2 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((2 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((2 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		//comas
		if((3 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((3 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((3 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((3 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((3 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((3 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((3 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((3 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((3 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((3 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		//jesus maria
		if((4 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "18";			
		}
		if((4 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((4 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((4 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((4 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((4 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((4 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((4 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((4 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((4 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((4 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((4 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((4 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}		
		//la molina
		if((5 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((5 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		if((5 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((5 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((5 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((5 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((5 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((5 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((5 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		//lince
		if((6 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((6 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((6 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((6 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((6 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((6 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((6 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((6 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((6 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((6 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((6 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((6 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((6 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		//los olivos
		if((7 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((7 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((7 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((7 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((7 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((7 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}		
		if((7 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((7 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((7 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((7 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((7 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "17";			
		}
		if((7 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((7 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		//miraflores
		if((8 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((8 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((8 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "50";			
		}
		if((8 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((8 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}		
		if((8 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((8 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((8 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((8 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		//san borja
		if((9 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((9 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((9 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((9 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((9 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((9 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((9 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((9 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((9 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		//san isidro
		if((10 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "18";			
		}
		if((10 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((10 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((10 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((10 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((10 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((10 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((10 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((10 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((10 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		//sjm
		if((11 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((11 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((11 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((11 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "28";			
		}
		if((11 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((11 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((11 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((11 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((11 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((11 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((11 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((11 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((11 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		//smp
		if((12 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((12 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((12 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((12 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((12 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((12 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((12 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((12 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}		
		if((12 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "38";			
		}
		if((12 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		//surco
		if((13 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";		
		}
		if((13 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((13 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((13 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((13 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";		
		}
		if((13 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}
		if((13 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((13 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "18";			
		}
		if((13 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((13 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}		
		if((13 == document.getElementById("recojo").value) & (14 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		//vmt
		if((14 == document.getElementById("recojo").value) & (1 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((14 == document.getElementById("recojo").value) & (2 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((14 == document.getElementById("recojo").value) & (3 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "45";			
		}
		if((14 == document.getElementById("recojo").value) & (4 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (5 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (6 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (7 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "40";			
		}
		if((14 == document.getElementById("recojo").value) & (8 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((14 == document.getElementById("recojo").value) & (9 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "25";			
		}
		if((14 == document.getElementById("recojo").value) & (10 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "30";			
		}
		if((14 == document.getElementById("recojo").value) & (11 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "15";			
		}
		if((14 == document.getElementById("recojo").value) & (12 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "35";			
		}
		if((14 == document.getElementById("recojo").value) & (13 == document.getElementById("entrega").value)) {
			document.getElementById("txttarifa").value = "20";			
		}	



	}
}


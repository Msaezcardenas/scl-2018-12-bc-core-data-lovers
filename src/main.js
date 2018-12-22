const table1 = document.getElementById("myTable"); 
/* table1 es la tabla inicial que despliega toda la Data, 
aquí se conecta su espaacio con el html */

function arrayToTable(arr, table){
/* se define función para hacer tablas con los parametros indicados dentro de la tabla
link del método https://www.w3schools.com/jsref/met_table_insertrow.asp */
  for (let i = arr.length - 1; i >= 0; i--){    
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = arr[i]["id"];
    cell2.innerHTML = arr[i]["name"];
    cell3.innerHTML = '<img src="'+arr[i]["img"]+'"/>';     
    cell4.innerHTML = arr[i]["spawn_chance"];
    cell5.innerHTML = arr[i]["height"];
  }
}

arrayToTable(POKEMON["pokemon"], table1); 
/* con esta sentencia se pide el despliegue de la tabla con toda la data */  
 
const table2 = document.getElementById("myTable"); 
/* se declara la tabla que reemplazara a la tabla original al apretar los botones
que tomará la misma posición de la tabla original en myTable */

function displaySorting(sortBy){
/* función para desplegar la data ordenada segun el boton apretado */
  let sortedData = sortData(POKEMON, sortBy, "ascendente");
  document.getElementById(sortBy).addEventListener("click", function(){
  for (let i = POKEMON["pokemon"].length - 1; i >= 0; i--){
    table1.deleteRow(i); //borra linea por linea la tabla original
  }
  return arrayToTable(sortedData, table2);
  })  
}

/* llama a displaySorting con todos los posibles valores de sorBy.*/
const arrProperties = ["id", "name", "spawn_chance", "height"]
for (let i = 0; i< arrProperties.length; i++){
  displaySorting(arrProperties[i])
}
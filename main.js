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
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        cell1.innerHTML = arr[i]["id"];
        cell2.innerHTML = arr[i]["name"];
        cell3.innerHTML = '<img src="'+arr[i]["img"]+'"/>';     
        cell4.innerHTML = arr[i]["spawn_chance"];
        cell5.innerHTML = arr[i]["weight"];
        cell6.innerHTML = arr[i]["height"];
        cell7.innerHTML = arr[i]["BMI"];
    }
}

arrayToTable(bmiInData(POKEMON), table1); 
/* con esta sentencia se pide el despliegue de la tabla con toda la data */  
 
const table2 = document.getElementById("myTable"); 
/* se declara la tabla que reemplazara a la tabla original al apretar los botones
que tomará la misma posición de la tabla original en myTable */

function displaySorting(sortBy){
/* función para desplegar la data ordenada segun el boton apretado */ 
    let clicker = 0; 
    /* si se cliquea numero impar de veces, orden es ascendente, 
    numero par de veces: orden descendente */
    document.getElementById(sortBy).addEventListener("click", function(){
        clicker += 1;
        if (clicker%2 !== 0){
            sortOrder = true;
        } else {
            sortOrder = false;
        }
        let sortedData = sortData(bmiInData(POKEMON), sortBy, sortOrder);
        for (let i = bmiInData(POKEMON).length - 1; i >= 0; i--){
            table1.deleteRow(i); //borra linea por linea la tabla original
        }  
        return arrayToTable(sortedData, table2);               
    })  
}

/* llama a displaySorting con todos los posibles valores de sortBy.*/
const arrProperties = ["id", "name", "spawn_chance", "weight", "height", "BMI"];
for (let i = 0; i< arrProperties.length; i++){
    displaySorting(arrProperties[i]);
}
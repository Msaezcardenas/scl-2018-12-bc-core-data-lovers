let table = document.getElementById("myTable"); 
/* table es la tabla inicial que despliega toda la Data, 
aquí se conecta su espacio con el html */

function arrayToTable(arr, table){
/* se define función para hacer tablas con los parametros indicados dentro de la tabla
link del método https://www.w3schools.com/jsref/met_table_insertrow.asp */
    table.innerHTML = "";
    for (let i = arr.length-1; i >= 0; i--){  
        const row = table.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        cell1.innerHTML = arr[i]["id"];
        cell2.innerHTML = arr[i]["name"];
        cell3.innerHTML = '<img id="img" src="'+arr[i]["img"]+'"/>'; 
        cell4.innerHTML = arr[i]["type"];
        cell5.innerHTML = arr[i]["weaknesses"];
        cell6.innerHTML = arr[i]["spawn_time"];
    }
}

/* se declara variable que guarda arreglo de objetos pokemon */
let data = (window.POKEMON).pokemon;


/* con esta sentencia se pide el despliegue de la tabla con toda la data */  
arrayToTable(data, table); 

/* se declara arreglo con id de botones para ordenar, que son los mismos que tomaran el parámetro "sortBy" 
en las funciones displaySorting(en main.js) y sortData(en data.js)*/
const arrProperties = ["id", "name", "spawn_time"];

/* se declara arreglo con id de botones para filtrar, que son los mismos que tomaran el parámetro "condition" 
en las funciones displayFilter(en main.js) y filterData(en data.js)*/
const arrTypes = ["Fire", "Dragon", "Electric", "Fighting", "Bug", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Water"];

/* función que permitirá llamar a los 2 arreglos anteriores para que cada elemento pase como un argumento de las funciones displaySorting y DisplayFilter*/
function iterate(display, keyArray, objectArray){
    for (let i = 0; i< keyArray.length; i++){        
        display(keyArray[i],objectArray);
    }
}

/* función para dejar todos los botones en formato "reseteado", como al inicio */
function refreshButtons(buttonArray){
    for (let i = 0; i< buttonArray.length; i++){        
        document.getElementById(buttonArray[i]).style.background = "white";  
    }
}

/* al apretar en el logo se refresca la página */
document.getElementById("pokemon-go").addEventListener("click", function(){
    location.reload();
})

/* se llama a refrescar los botones de ordenado y filtrado utilizando la función anterior*/
refreshButtons(arrTypes);
refreshButtons(arrProperties);

/* función que llama a sortData.js(en data.js) cuando se apreten los botones de ordenado */
function displaySorting(sortBy,objectArray){
    const sortButton = document.getElementById(sortBy).style; //se define constante para guardar estilo de botón  
    let counter = 0;//contador que sirve para orden ascendente o descentente(par/impar) 
    document.getElementById(sortBy).addEventListener("click", function(){ //si se apreta el botón que esta tomando el valor de "sortBy"...
        let sortOrder = true; //el orden por defecto es ascendente(true)
        if (counter % 2 === 0){ //si el contador es par
            refreshButtons(arrProperties); //refrescar botones
            sortButton.background = "lightblue"; //cambiar botones a color azul 
            counter += 1 // sumar 1 para que la siguiente vez que se aprete el boton ordene en forma descendente    
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table); //llama a sortData para que ordene la tabla segun el boton apretado en orden ascendente            
        } else { //si el contador es impar
            counter += 1 // sumar 1 para que la siguiente vez que se aprete el botón ordene en forma ascendente 
            refreshButtons(arrProperties);//refrescar botones
            sortButton.background = "lightblue"; //cambiar botones a color verde 
            sortOrder = false; //se reasigna sortOrder para que se realice orden descendente         
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table); //llama a sortData para que se muestre la tabla ordenada segun el boton apretado en orden descendente                     
        }                  
    })  
}

/* función que llama a filterData.js(en data.js) cuando se apreten los botones de filtrado */
function displayFilter(condition,objectArray){
    const filteredData = window.processData.filterData(objectArray, condition); //se define constante para guardar data filtrada según condición(boton de filtro)
    const filterButton = document.getElementById(condition).style; //se define constante para guardar estilo de botón
    let percent = document.getElementById("percent");// se define variable para acceder a elemento porcentaje
    document.getElementById(condition).addEventListener("click", function(){ //si se apreta el botón que esta tomando el valor de "condition"...
        if (filterButton.background === "white"){ //si el botón es blanco         
            refreshButtons(arrTypes); //refrescar todos los botones de filtrado
            refreshButtons(arrProperties); //refrescar todos los botones de ordenado            
            filterButton.background = "lightgrey"; //cambiar boton seleccionado a color gris 
            percent.style.display = "block";//aparece caja de porcentaje
            percent.innerHTML = window.processData.percentageFilteredData(filteredData, data) + "% de los pokemones son de tipo " + condition + ".";                      
            iterate(displaySorting, arrProperties, filteredData);//llamar a display sorting para que se pueda hacer ordenado dentro de filtrado, en caso que se aprete un boton de sorting mientras esté apretado un botón de filter                      
            return arrayToTable(filteredData, table);//mostrar la data filtrada segun el botón apretado                                     
        } else { //si el botón no es blanco (es gris)   
            percent.style.display = "none";//desaparece caja de porcentaje        
            filterButton.background = "white";//cambiar boton seleccionado a color blanco (representa descliqueado)            
            refreshButtons(arrProperties);//refrescar todos los botones de ordenado
            iterate(displaySorting, arrProperties, data);//llamar a display sorting para que se pueda volver a ordenar la data original una vez descliqueado
            return arrayToTable(data, table);//mostrar la data no filtrada. 
        }                  
    })      
} 

iterate(displaySorting, arrProperties, data);//para pedir que se ejecute la función que llama a displaySorting con todos los posibles valores de sortBy(botones de ordenado)
iterate(displayFilter, arrTypes, data); //para pedir que se ejecute la función que llama a displayFilter con todos los posibles valores de condition(botones de filtrado)
 
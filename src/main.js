let table = document.getElementById("myTable"); 
/* table1 es la tabla inicial que despliega toda la Data, 
aquí se conecta su espaacio con el html */

function arrayToTable(arr, table){
/* se define función para hacer tablas con los parametros indicados dentro de la tabla
link del método https://www.w3schools.com/jsref/met_table_insertrow.asp */
    for (let i = arr.length-1; i >= 0; i--){  
        const row = table.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);
        cell1.innerHTML = arr[i]["id"];
        cell2.innerHTML = arr[i]["name"];
        cell3.innerHTML = '<img id="img" src="'+arr[i]["img"]+'"/>'; 
        cell4.innerHTML = arr[i]["type"];
        cell5.innerHTML = arr[i]["spawn_chance"];
        cell6.innerHTML = arr[i]["weight"];
        cell7.innerHTML = arr[i]["height"];
        cell8.innerHTML = arr[i]["BMI"];
    }
}

let modifiedData = window.processData.bmiInData(window.POKEMON);

arrayToTable(modifiedData, table); 
/* con esta sentencia se pide el despliegue de la tabla con toda la data */  
 
const arrProperties = ["id", "name", "spawn_chance", "weight", "height", "BMI"];
const arrTypes = ["Fire", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Bug", "Flying", "Ghost","Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];

function refreshButtons(buttonArray){
    for (let i = 0; i< buttonArray.length; i++){        
        document.getElementById(buttonArray[i]).style.background = "white";  
    }
}

function iterate(display, keyArray, objectArray){
    for (let i = 0; i< keyArray.length; i++){        
        display(keyArray[i],objectArray);
    }
}

refreshButtons(arrTypes);
refreshButtons(arrProperties);

function displaySorting(sortBy,objectArray){
    const sortButton = document.getElementById(sortBy).style;  
    let counter = 0;  
    document.getElementById(sortBy).addEventListener("click", function(){
        let sortOrder = true;
        if (counter % 2 === 0){
            table.innerHTML = "";
            refreshButtons(arrProperties); 
            sortButton.background = "lightblue";  
            counter += 1       
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);            
        } else {
            counter += 1 
            refreshButtons(arrProperties);
            sortButton.background = "lightgreen";
            table.innerHTML = "";
            sortOrder = false;            
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);                     
        }                  
    })  
}

function displayFilter(condition,objectArray){
    const filteredData = window.processData.filterData(objectArray, condition);
    const filterButton = document.getElementById(condition).style;
    document.getElementById(condition).addEventListener("click", function(){ 
        if (filterButton.background === "white"){          
            refreshButtons(arrTypes);
            refreshButtons(arrProperties);            
            filterButton.background = "lightgrey";            
            table.innerHTML = "";              
            iterate(displaySorting, arrProperties, filteredData);                      
            return arrayToTable(filteredData, table);                                     
        } else {           
            filterButton.background = "white";            
            table.innerHTML = "";
            refreshButtons(arrProperties);
            iterate(displaySorting, arrProperties, modifiedData);
            return arrayToTable(modifiedData, table); 
        }                  
    })      
} 

iterate(displaySorting, arrProperties, modifiedData);
iterate(displayFilter, arrTypes, modifiedData);

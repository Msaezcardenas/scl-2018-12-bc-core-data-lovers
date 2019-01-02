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

/* function displaySorting(sortBy){    
    document.getElementById(sortBy).addEventListener("click", function(){
        let sortOrder;
        let sortedData = processData.sortData(modifiedData, sortBy, sortOrder);       
        if (document.getElementById(sortBy).style.background === "white"){
            for (let i = 0; i< arrProperties.length; i++){        
                document.getElementById(arrProperties[i]).style.background = "white";
            }
            document.getElementById(sortBy).style.background = "lightgrey";
            table.innerHTML = "";
            sortOrder = true;
            return arrayToTable(sortedData, table);  
        } else {
            document.getElementById(sortBy).style.background = "lightgrey";
            table.innerHTML = "";
            sortOrder = false;
            return arrayToTable(sortedData, table);  
        }               
    })  
} */

const arrTypes = ["Fire", "Grass", "Ice"];

for (let i = 0; i< arrTypes.length; i++){        
    document.getElementById(arrTypes[i]).style.background = "white";
}

function displayFilter(condition){
    const filteredData = window.processData.filterData(modifiedData, condition);
    document.getElementById(condition).addEventListener("click", function(){ 
        if (document.getElementById(condition).style.background === "white"){
            for (let i = 0; i< arrTypes.length; i++){        
                document.getElementById(arrTypes[i]).style.background = "white";
            }
            document.getElementById(condition).style.background = "lightgrey";
            table.innerHTML = "";
            return arrayToTable(filteredData, table);  
        } else {
            document.getElementById(condition).style.background = "white";
            table.innerHTML = "";
            return arrayToTable(modifiedData, table);  
        }                  
    })      
} 

function displaySorting(sortBy){
    let clicker = 0; 
    document.getElementById(sortBy).addEventListener("click", function(){
        clicker += 1;
        let sortOrder;
        if (clicker%2 !== 0){
            sortOrder = true;
        } else {
            sortOrder = false;
        }
        let sortedData = window.processData.sortData(modifiedData, sortBy, sortOrder);
        table.innerHTML = "";
        return arrayToTable(sortedData, table);              
    })  
}

/* function displayFilter(condition){
    let clicker = 0;
    const filteredData = processData.filterData(modifiedData, condition);
    document.getElementById(condition).addEventListener("click", function(){ 
        clicker += 1;
        if (clicker%2 !== 0){
            for (let i = 0; i< arrTypes.length; i++){        
                document.getElementById(arrTypes[i]).style.background = "white";
            }
            document.getElementById(condition).style.background = "lightgrey";
            table.innerHTML = "";
            return arrayToTable(filteredData, table);  
        } else {
            document.getElementById(condition).style.background = "white";
            table.innerHTML = "";
            return arrayToTable(modifiedData, table);  
        }                  
    })      
} */

function iterate(display, arr){
    for (let i = 0; i< arr.length; i++){        
        display(arr[i]);
    }
}

iterate(displaySorting, arrProperties);
iterate(displayFilter, arrTypes);



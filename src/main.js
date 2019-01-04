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
const arrTypes = ["Fire", "Grass", "Ice"];

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
            sortButton.background = "lightgreen";
            table.innerHTML = "";
            sortOrder = false;            
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);                     
        }                  
    })  
}

//pruebas con console log y counter
/* function displaySorting(sortBy,objectArray){
    const sortButton = document.getElementById(sortBy).style;  
    let counter = 0;  
    document.getElementById(sortBy).addEventListener("click", function(){
        console.log(sortBy);
        let sortOrder = true;
        if (sortButton.background === "yellow" || sortButton.background === "lightgreen"){
            console.log(sortButton.background);
            table.innerHTML = "";
            refreshButtons(arrProperties); 
            sortButton.background = "lightblue"; 
            console.log(sortButton.background);  
            counter += 1  
            console.log(counter);      
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);            
        } else if (sortButton.background === "lightblue") {
            counter += 1 
            console.log(counter);
            if (counter % 2 == 0){
                sortButton.background = "lightblue";
                return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);
            } else {
            console.log(sortButton.background);
            sortButton.background = "lightgreen";
            console.log(sortButton.background);
            table.innerHTML = "";
            sortOrder = false;
            console.log(sortButton.background);
            
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);    
            }          
        }                  
    })  
} */

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


//funciona ordenado dentro de filtrado bastante bien pero no perfecto
/* function displaySorting(sortBy,objectArray){
    const sortButton = document.getElementById(sortBy).style;    
    document.getElementById(sortBy).addEventListener("click", function(){
        let sortOrder = true;
        if (sortButton.background === "yellow" || sortButton.background === "lightgreen"){
            table.innerHTML = "";
            refreshButtons(arrProperties);
            sortButton.background = "lightblue";            
            return arrayToTable(window.processData.sortData(objectArray, sortBy, sortOrder), table);
        } else if (sortButton.background === "lightblue") {
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
        if (filterButton.background === "yellow"){
            refreshButtons(arrTypes);
            refreshButtons(arrProperties);            
            filterButton.background = "lightgrey";            
            table.innerHTML = "";  
            iterate(displaySorting, arrProperties, filteredData);          
            return arrayToTable(filteredData, table);                                     
        } else {
            filterButton.background = "yellow";
            table.innerHTML = "";
            refreshButtons(arrProperties);
            iterate(displaySorting, arrProperties, modifiedData);
            return arrayToTable(modifiedData, table); 
        }                  
    })      
} 

iterate(displaySorting, arrProperties, modifiedData);
iterate(displayFilter, arrTypes, modifiedData);  */





//de aqui par abajo funcionaba bien (sin ordenado dentro de filtrado)

/* function displayFilter(condition){
    const filteredData = window.processData.filterData(modifiedData, condition);
    const filterButton = document.getElementById(condition).style;
    document.getElementById(condition).addEventListener("click", function(){ 
        if ( filterButton.background === "white"){
            refreshButtons(arrTypes);
            refreshButtons(arrProperties);
            filterButton.background = "lightgrey";
            table.innerHTML = "";
            return arrayToTable(filteredData, table);  
        } else {
            filterButton.background = "white";
            table.innerHTML = "";
            return arrayToTable(modifiedData, table);  
        }                  
    })      
} 

function displaySorting(sortBy){
    const sortButton = document.getElementById(sortBy).style;    
    document.getElementById(sortBy).addEventListener("click", function(){
        let sortOrder = true;
        if (sortButton.background === "white" || sortButton.background === "lightgreen"){
            table.innerHTML = "";
            refreshButtons(arrProperties);
            sortButton.background = "lightblue";            
            return arrayToTable(window.processData.sortData(modifiedData, sortBy, sortOrder), table);
        } else if (sortButton.background === "lightblue") {
            sortButton.background = "lightgreen";
            table.innerHTML = "";
            sortOrder = false;
            return arrayToTable(window.processData.sortData(modifiedData, sortBy, sortOrder), table);              
        }                  
    })  
} */

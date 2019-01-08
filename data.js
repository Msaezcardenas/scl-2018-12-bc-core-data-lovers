
window.processData = {
  bmiInData: (data) => {  
    let arrModified = Object.values(data)[0];
    for (let i = 0; i < arrModified.length; i++){
      arrModified[i].weight = parseFloat(arrModified[i].weight);
      arrModified[i].height = parseFloat(arrModified[i].height);
      arrModified[i].BMI = parseFloat((arrModified[i].weight/(arrModified[i].height * arrModified[i].height)).toFixed(2));
    }
    return arrModified;
  },

  average: (data) => {  
    let sumW = 0;
    let sumH = 0;
    let sumB = 0;
    for (let i = 0; i < data.length; i++){
      sumW += data[i].weight;
      sumH += data[i].height;
      sumB += data[i].BMI;
    }    
    return [(sumW/data.length).toFixed(2), (sumH/data.length).toFixed(2), (sumB/data.length).toFixed(2)];
  },

  filterData: (data, condition) => {  
    let storeTypes = [];
    for (let i = 0; i < data.length; i++){
      for (let j=0; j < data[i]["type"].length; j++){
      if (data[i].type[j] === condition){
        storeTypes.push(data[i]);
      }
      }   
    }
    return storeTypes;
  },

  sortData: (data, sortBy, sortOrder) => { 
    /* se utiliza metodo sort() aprendido aquí https://www.w3schools.com/js/js_array_sort.asp para números y strings */
  /* lo siguiente ordena según valor numérico, dividiendose en ascendente(true) y descendente(false) */
  if (typeof data[0][sortBy] === "number") {
    if (sortOrder === true){
      return data.sort(function(a, b){return a[sortBy] - b[sortBy]});
    } else if (sortOrder == false){
      return data.sort(function(a, b){return b[sortBy] - a[sortBy]});
    } 
  /* lo siguiente ordena según valor string, dividiendose en ascendente(true) y descendente(false) */
  } else if (typeof data[0][sortBy] === "string") {    
    if (sortOrder === true){
      return data.sort(function(a, b){ 
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();       
        if (x < y) {
          return -1;
        } if (x > y) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortOrder == false){
      return data.sort(function(a, b){ 
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();       
        if (x < y) {
          return 1;
        } if (x > y) {
          return -1;
        } else {
          return 0;
        }
      }); 
    }  
  }
  }
}

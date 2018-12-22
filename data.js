
function sortData(data, sortBy, sortOrder){
  /* las 2 variables y el for se declaran para acceder al arreglo de objetos con las caracteristicas de cada pokemón */
  let arr = [];
  let value = Object.values(data)[0];
  for (let i = 0; i < value.length; i++){
    arr.push(value[i]);
  }
  /* se utiliza metodo sort() aprendido aquí https://www.w3schools.com/js/js_array_sort.asp para números y strings */
  /* lo siguiente ordena según valor numérico, dividiendose en ascendente y descendente */
  if (typeof arr[0][sortBy] == "number") {
    if (sortOrder == "ascendente"){
      return arr.sort(function(a, b){return a[sortBy] - b[sortBy]});
    } else if (sortOrder == "descendente"){
      return arr.sort(function(a, b){return b[sortBy] - a[sortBy]});
    } 
  /* lo siguiente ordena según valor string, dividiendose en ascendente y descendente */
  } else if (typeof arr[0][sortBy] == "string") {    
    if (sortOrder == "ascendente"){
      return arr.sort(function(a, b){ 
        var x = a[sortBy].toLowerCase();
        var y = b[sortBy].toLowerCase();       
        if (x < y) {
          return -1;
        } if (x > y) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortOrder == "descendente"){
      return arr.sort(function(a, b){ 
        var x = a[sortBy].toLowerCase();
        var y = b[sortBy].toLowerCase();       
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

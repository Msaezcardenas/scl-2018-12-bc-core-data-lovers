function bmiInData(data){
  let arrModified = Object.values(data)[0];
  for (let i = 0; i < arrModified.length; i++){
      arrModified[i].weight = parseFloat(arrModified[i].weight);
      arrModified[i].height = parseFloat(arrModified[i].height);
      arrModified[i].BMI = parseFloat((arrModified[i].weight/(arrModified[i].height ** 2)).toFixed(2));
  }
  return arrModified;
}


window.example = example;


const nombrePokemones = (data) => {
  let nombres = [];
  for (let i = 0; i<data.length; i++){
    nombres.push(data[i].name)
  }
  return nombres;
};

const resultadoNombres = nombrePokemones(data);


const weaknessesPokemones = (data) => {
  let debilidades = [];
  for (let i = 0; i<data.length; i++){
    debilidades.push(data[i].weaknesses)
  }
  return debilidades;
};

const resultadoWeaknessesPokemones = weaknessesPokemones(data);

const filtrarDebilesAlFuego = (resultadoWeaknessesPokemones) => {
  let debilesFuego = [];
  for (let i = 0; i < resultadoWeaknessesPokemones.length; i++){
    if (resultadoWeaknessesPokemones[i][0] === "Fire"){
      debilesFuego.push(data[i].name);
    }   
  }
  return debilesFuego;
};

const resultadoFiltroFuego = filtrarDebilesAlFuego(resultadoWeaknessesPokemones);

const typePokemon = (data) => {
  let tipos = [];
  for (let i = 0; i<data.length; i++){
    tipos.push(data[i].type)
  }
  return tipos;
};

const resultType = typePokemon(data)

const filterType = (resultType, condition) => {
  let storeTypes = [];
  for (let i = 0; i < resultType.length; i++){
    for (let j=0; j< resultType[i].length; j++){
    if (resultType[i][j] === condition){
      storeTypes.push(data[i]);
    }
    }   
  }
  return storeTypes;
};

const resultFilterType = filterType(resultType);



function sortData(data, sortBy, sortOrder){
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
    } else if (sortOrder == false){
      return data.sort(function(a, b){ 
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


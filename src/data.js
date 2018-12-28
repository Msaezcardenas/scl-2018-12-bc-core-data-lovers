// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

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



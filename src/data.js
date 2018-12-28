// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

const filterType = (data, condition) => {
  let storeTypes = [];
  for (let i = 0; i < data.length; i++){
    for (let j=0; j< data[i]["type"].length; j++){
    if (data[i].type[j] === condition){
      storeTypes.push(data[i]);
    }
    }   
  }
  return storeTypes;
};
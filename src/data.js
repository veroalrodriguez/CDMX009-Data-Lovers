//Buscador por nombre
export const filterName = (rickandmorty, value) => {
  const array = [];

  rickandmorty.find(object => object.name === value);
  return array;
}

//Ordenando
export const asc = (rickandmorty) => {
  const array = rickandmorty.sort((object1, object2) => ((object1.name > object2.name) ? 1 : -1));
  return array;
};

export const des = (rickandmorty) => {
  const array = rickandmorty.sort((object1, object2) => ((object1.name > object2.name) ? -1 : 1));
  return array;
};

//Filtrado por especie
export const filterSpecies = (rickandmorty, value) => {
  const array = [];

  rickandmorty.forEach((object) => {
    object.species.forEach((select_species) => {
      if (select_species === value) {
        array.push(object);
      }
    });
  });
  return array;
};

//Filtrado por estado
export const filterStatus = (rickandmorty, value) => {
  const array = [];

  rickandmorty.forEach((object) => {
    object.status.forEach((select_status) => {
      if (select_status === value){
        array.push
      }
    });
  });
  return array;
};

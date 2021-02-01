const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 5123513,
    lat: 22.43,
    lng: 34.21,
  },
};

console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona2);
console.log(persona);

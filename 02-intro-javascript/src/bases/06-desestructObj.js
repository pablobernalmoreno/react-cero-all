const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave: key } = persona;

console.log(nombre);
console.log(edad);
console.log(key);

const retornaPersona = ({ nombre, apellido = "Doe" }) => {
  return {
    name: `${nombre} ${apellido}`,
    age: 45,
    latlng: {
      lat: 34.23,
      lng: 21.21,
    },
  };
};

const {
  name,
  age,
  latlng: { lat, lng },
} = retornaPersona(persona);

console.log(name, age, lat, lng);

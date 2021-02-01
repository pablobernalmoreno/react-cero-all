function saludar(nombre) {
  return `Hola ${nombre}`;
}

const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar4 = (nombre) => `Hola ${nombre}`;

export const getUser = () => ({
  uid: "abcsc",
  username: "asdasd",
});

export const getUsuarioActivo = (nombre) => ({
  uid: "ABC345",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");

// console.log(usuarioActivo);

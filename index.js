const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log(
      "Ingresa todos los datos: nombre, edad, animal, color y enfermedad.",
    );
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === "leer") {
  leer();
}

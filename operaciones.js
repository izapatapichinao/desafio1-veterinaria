const fs = require("fs");

// Funcion para registrar la cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const cita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  // agregar el registro nuevo al arreglo citas
  citas.push(cita);

  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log("Cita registrada con éxito");
};

// Funcion para leer las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  // si no hay citas, mostrar este mensaje
  if (citas.length === 0) {
    console.log("No hay citas registradas");
    return;
  }
  console.log(citas);
};

module.exports = { registrar, leer };

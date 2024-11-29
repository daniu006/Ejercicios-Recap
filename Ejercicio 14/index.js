"use strict"
let tieneCuenta = prompt("¿Tienes una cuenta? (sí/no)");
let conoceContraseña = prompt("¿Conoces la contraseña? (sí/no)");
 if (tieneCuenta === "sí" && conoceContraseña === "sí") {
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
}

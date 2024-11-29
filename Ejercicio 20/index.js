"use strict"
const calcularPrecioConIVA = (precio) => {
    const iva = precio * 0.12;
    const precioTotal = precio + iva;
    return precioTotal;
  }
  

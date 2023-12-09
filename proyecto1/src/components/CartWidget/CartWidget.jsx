import {GrCart}from "react-icons/gr";


import React, { useState } from 'react';

const CartWidget = () => {
  // Estado para almacenar los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para quitar un producto del carrito
  const quitarDelCarrito = (indice) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    setCarrito(nuevoCarrito);
  };

  // Función para calcular el total de la compra
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => quitarDelCarrito(index)}>Quitar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calcularTotal()}</p>
      <hr />
      <h3>Productos Disponibles</h3>
      <ul>
        <li>
          Producto 1 - $20{' '}
          <button onClick={() => agregarAlCarrito({ nombre: 'Producto 1', precio: 20 })}>Agregar al Carrito</button>
        </li>
        <li>
          Producto 2 - $30{' '}
          <button onClick={() => agregarAlCarrito({ nombre: 'Producto 2', precio: 30 })}>Agregar al Carrito</button>
        </li>
        {/* Agrega más productos según sea necesario */}
      </ul>
    </div>
  );
};

export default CartWidget;

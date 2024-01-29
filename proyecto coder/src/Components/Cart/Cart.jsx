import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((producto) => (
        <ItemCart key={producto.id} product={producto} />
      ))}
      <p>total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;

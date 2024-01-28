import React from 'react';
import { useCartContext } from '../Context/CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.imagen} alt={product.title} />
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: $ {product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart
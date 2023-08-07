import { BsPlusCircle } from 'react-icons/bs';
import { PiMinusCircle } from 'react-icons/pi';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from "./CartContext"
import React from 'react';

const CartItem = ({ item }) => {
    const { id, name, image, price, quantity } = item;
    const { updateQuantity, removeItem } = React.useContext(CartContext)

    const handleIncrease = () => {
        updateQuantity(id, quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            updateQuantity(id, quantity - 1);
        }
    };

    const handleRemove = () => {
        removeItem(id);
    };


    const formatPriceToIDR = (price) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };

    const getTotalPrice = () => {
        return (price * quantity).toFixed(2);
    };

    return (
        <div className='container-cart-item'>
            <div className='cart-item'>
                <div className='cart-item-info'>
                    <img src={image} alt='' className='cart-item-image' />
                    <div className='cart-item-name'>{name}</div>
                    <div className='cart-item-price'>{formatPriceToIDR(getTotalPrice())}</div>
                    <button className='btn-decrease' onClick={handleDecrease}>
                        <PiMinusCircle size={28} />
                    </button>
                    <div className='cart-item-quantity'>Quantity: {quantity}</div>
                    <button className='btn-increase' onClick={handleIncrease}>
                        <BsPlusCircle size={22} />
                    </button>
                    <button className='cart-item-remove' onClick={handleRemove}>
                        <FaTrash size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

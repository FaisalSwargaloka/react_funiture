import React from 'react';
import CartItem from '../../components/CartItem';
import "../../components/cartitem.css"
import { Link } from 'react-router-dom';
import { useCart } from "../../components/CartContext"

const CartPage = () => {
    const { cartItems, totalPrice, clearCart } = useCart();

    const formatPriceToIDR = (price) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };


    return (
        <>
            <div className='bg-cart'>
                <h1 className='cart-page-title'>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="cart-empty-page">
                        <div className='empty-cart'>
                            <div className='info-cart-empty'>Waduh... keranjang mu kosong.
                                <Link to="/product"><button className='btn-isi-cart'>Belanja Sekarang</button></Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
                    ))
                )}
            </div>
            <div className="total-price">
                <strong>Total Harga:</strong> {formatPriceToIDR(totalPrice)}
            </div>
            <div className='chek-out'>
                <button className='btn-check-out' onClick={clearCart}>Order</button>
            </div>
        </>
    );
};

export default CartPage;

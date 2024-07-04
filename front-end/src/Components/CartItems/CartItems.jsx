import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalcartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    console.log("hi",getTotalcartAmount);
    
    return (
        <div className='cartitems'>
            <div className="cartformat-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                const quantity = cartItems[product.id] || 0; 
                if (quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartformat-main">
                                <img src={product.image} alt="" className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>${product.new_price * quantity}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(product.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalcartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalcartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCCED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a Coupon, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Coupon' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;




import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import Product from '../../Pages/Product'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay=(props)=> {
    const {Product}=props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={Product.image} alt="" />
            <img src={Product.image} alt="" />
            <img src={Product.image} alt="" />
            <img src={Product.image} alt="" />
        </div>
        <div className="productdisplay-img">
        <img src={Product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{Product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={star_dull} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${Product.old_price}</div>  
          <div className="productdisplay-right-price-new">${Product.new_price}</div>      
        </div>
        <div className="productdisplay-right-discription">
          A lightweight, usually knitted,pullover shirt, close-fitting and a round neckline and short sleeves,
          worn as undershirt or outershirt garment.
        </div>
        <div className="productdisplay-right-sizes">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(Product.id)}} className="Add-to-cart">Add to cart</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women , T-Shirt , crop-Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern , Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay

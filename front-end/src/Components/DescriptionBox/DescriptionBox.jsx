import React from 'react'
import './DescriptionBox.css'
const DescriptionBox=()=>{
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox"> Description</div>
            <div className="descriptionbox-navbox fade">   Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
        <p>An E-Commerce website is an online plateform that faciliated
            buying and selling of products or services over the internet servers
            as a virtual marketplace where business and conduct transactions without 
            physical presence. E-Commerce websites have gained imeence popularity due to
            their convinence and accessibility and the gloabl reach they offer.
        </p>
        <p>
            E-commerce website typically display products or services. A detaild description,images,prices and any available variety(e.g., Size, colors). Each product usually has ita own details with relevant informations
        </p>
        </div>
     
    </div>
  )
}

export default DescriptionBox

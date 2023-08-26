import React from 'react'
import { useCartContext } from '../context/cart_context';
import FormatPrice from '../Helpers/FormatPrice';

function CashOnDelivery() {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  return (
    <div className="payment-type-card">
    <div className="payment-type-img">
    <img className="img" 
      src="images/cash-on-delivery.png"
      alt=""
    />
    </div>
    <h3>Cash On Delivery</h3>
    <p className="paragraph">Pay cash at time of delivery</p>
    <a href=" ">
     <button style={{width:"100%",height:"100%",color:"white",backgroundColor:"green",fontSize:"20px"}}>
      
     <FormatPrice price={shipping_fee + total_price} />
     </button>
    </a>

    </div>
  )
}

export default CashOnDelivery

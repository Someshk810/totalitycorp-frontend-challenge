import React from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import { useCartContext } from '../context/cart_context';

function Upi() {
  const {  total_price, shipping_fee} = useCartContext();
  return (
    <div className="payment-type-card">
    <div style={{width:"180px",height:"80px",marginBottom:"10px"}}
    >
    <img className="img" 
      src="images/upi.png"
      alt=""
    />
    </div>
    <h3>Pay via UPI</h3>
    

    <div className="upi-type-container">

   <a  href=" "className="upi-type">
   
      <button style={{width:"100%",height:"100%",color:"white",backgroundColor:"green",fontSize:"20px"}}>
      
      
      <FormatPrice price={shipping_fee + total_price} />
       
     </button>
    
      </a>


      
    </div>
    </div>
  )
}

export default Upi

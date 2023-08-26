import React ,{useState}from 'react';
import styled from "styled-components";
import DeliveryDatails from './components/DeliveryDatails';
import Cards from './components/Cards';
import BillDetails from './components/BillDetails';

import CashOnDelivery from './components/CashOnDelivery';
import Upi from './components/Upi';
import { useCartContext } from './context/cart_context';
import { Link, NavLink } from 'react-router-dom';
import FormatPrice from './Helpers/FormatPrice';
import { Button } from './styles/Button';
const Checkout = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
    const [paymentType, setPaymentType]= useState("cod");
  return (
      <section className="delivery-payment-details">
    <DeliveryDatails />
  <hr style={{width:"100%",margin:"0px auto 20px auto",border:"1px solid #E9ECEE"}} />

    <div className="payment-details">
    <div>
      <h2 style={{fontSize:"26px", fontWeight:"bold"}}>Payment Details</h2>
      <h3 style={{margin:"20px 0px",fontSize:"18px"}}>Select Payment Method </h3>
    </div>
   

     <div className="payment-product-container">
       <a 
       onClick={()=> setPaymentType("cod")}> 
       <button>
        Cash On Delivery
       </button>
       </a>
       
       <a 
       onClick={()=> setPaymentType("upi")}> 
       <button>
         UPI
       </button>
       </a>

     </div>
      <div className="payment-type-container"> 
      {paymentType==="cod"?<CashOnDelivery />:null}
      
      {paymentType==="upi"? <Upi />:null}
      </div>

      </div>

      <div>
      <Wrapper>
         
        
          <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
          
        </div>
         {/* <BillDetails type= "GST"  amount={gst} /> */}
         {/* <BillDetails type= "Delivery Fee" amount={total_price<500 && total_price>0? delivery_charge:0} /> */}

         <hr />

         {/* <BillDetails type= "To Pay" amount="1250" />        */}

        
         </Wrapper>
           </div>
  
    </section>
  )
}

export default Checkout;

const Wrapper = styled.section`
  padding: 9rem 0;

 
  
  

    

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      ${'' /* background-color: white; */}
      color:blue;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: black;
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    ${'' /* margin: 4.8rem 0; */}
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    align-items: center;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;




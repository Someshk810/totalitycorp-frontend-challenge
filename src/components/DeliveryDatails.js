import React from 'react';
import AddressContainer from './AddressContainer';

function DeliveryDatails() {
  return (
    <div className="delivery-details">
      
    <div>
      <h2 style={{fontSize:"26px", fontWeight:"bold"}}>Shipping Details</h2>
    </div>


   {/* <div className="address-container"> */}
    <AddressContainer />
    
    
    {/* </div> */}


    

    </div>
  )
}

export default DeliveryDatails

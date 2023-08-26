import React from 'react';
import { useState } from 'react';
import Modal from './Modal';


 
function AddressContainer() {
    const [openModal, setOpenModal] = useState(false);
    const [address,setAddress] = useState({
      flatNo:"",
      area:"",
      landmark:"",
      pincode:"",
      city:"",
      state:"",
    })
       const finalAddress= address.flatNo +" "+ address.area+address.landmark +" " +address.pincode  +" "+ address.city+ " " +address.state;
  return (
    <div className="address-details">
    <div className="address-type">
    
     
    </div>
    <div className="address">
      <p className="">{finalAddress}</p>
     
    </div>
   
    <div className="select-address">
     <button
      id="select-btn"
      onClick={()=>{
        setOpenModal(true);
      }}
       style={{backgroundColor:"orange",margin:"2px 0px 0px 0px",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",width:"150px", height:"30px",borderRadius:"8px"}} >
       Add Address
     </button>
     {openModal && <Modal close={setOpenModal}address={address} setAddress={setAddress}/>}
     
    </div>
 
    
  
   </div>
  
  )
}

export default AddressContainer

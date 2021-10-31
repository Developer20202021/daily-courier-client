import React, { useEffect } from 'react';
import './YourOrderRow.css'






const YourOrderRow = (props) => {
    const {_id ,name,deliveryProductName, status, email, phoneNumber, addressTo, cancel, ok} = props.value

    const {cancelEvent, deleteEvent} = props

    const confirmBtn = ()=>{

        const r = window.confirm("Are you sure?Do you want to delete it?")
        if (r==true) {
            deleteEvent(_id)
        }
        else{

        }
        console.log(r);

    }

 









    return (
        <tr className='manage-order-client-row'>
            
      
        <td title={deliveryProductName}>{deliveryProductName}</td>
        {status=='Pending'?<td className='pending'> <p>{status}</p></td>:null}
        {status=='Aproved'?<td className='aproved'> <p>{status}</p></td>:null}
        {status=='Canceled'?<td className='cancel-status'> <p>{status}</p></td>:null}
       
        
        <td title={email}>{email}</td>
        <td title={phoneNumber}>{phoneNumber}</td>
        <td title={addressTo}>{addressTo}</td>
        <td ><div className='your-order-btn'><button onClick={()=>cancelEvent(_id)} className='cancel-btn' >Cancel</button> <button className='delete-order' onClick={()=>confirmBtn()}>Delete</button></div></td>









     </tr>
    );
};

export default YourOrderRow;
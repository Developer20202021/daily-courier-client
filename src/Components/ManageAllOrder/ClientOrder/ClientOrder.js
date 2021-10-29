import React, { useEffect, useState } from 'react';
import './ClientOrder.css';




const ClientOrder = ({value}) => {
    console.log(value);

    const {addressFrom, addressTo, name, email, phoneNumber, status, _id, deliveryProductName} = value;


    const cancel = ()=>{

        fetch(`http://localhost:5000/client/delivery/delevery-info-delete/${_id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log(err);
        })




    }

    const ok = ()=>{

        fetch(`http://localhost:5000/client/delivery/delevery-info-approve/${_id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log(err);
        })

    }

    



    return (
        <tr className='manage-order-client-row'>
            
           <td>{name}</td>
           <td>{deliveryProductName}</td>
           {status=='Pending'?<td className='pending'> <p>{status}</p></td>:null}
           {status=='Aproved'?<td className='aproved'> <p>{status}</p></td>:null}
           {status=='Canceled'?<td className='cancel-status'> <p>{status}</p></td>:null}
          
           
           <td>{email}</td>
           <td>{phoneNumber}</td>
           <td>{addressTo}</td>
           <td ><div className='cancel-td'><button onClick={cancel} >Cancel</button> <button className='ok' onClick={ok}>Ok</button></div></td>









        </tr>
    );
};

export default ClientOrder;
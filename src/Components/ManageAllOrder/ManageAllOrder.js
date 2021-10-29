import React, { useEffect, useState } from 'react';
import ClientOrder from './ClientOrder/ClientOrder';
import './ManageAllOrder.css';





const ManageAllOrder = () => {

    const [clientInfo, setClientInfo] = useState([]);
    console.log(clientInfo);


    useEffect(()=>{

        fetch('http://localhost:5000/client/delivery/all-delivery-info')
        .then(res=>res.json())
        .then(data=>setClientInfo(data))
        .catch(err=>{
            console.log(err);
        })

    },[])









    return (
        <div>

            <div className="client-order-history-container">

            <div className="client-order-history-header">



                <div className="order-list-title">
                    <span className='order-list-icon'><i class="fas fa-border-all"></i> </span> 
                    <span className='order-list'>Order List</span>
                </div>
            </div>



            <div className="manage-order-table-container">

                <div className="manage-order-table-box">



                    <table className='manage-order-table'>

                        <thead>
                            <th> <span><i class="fas fa-user-tie"></i></span> <span>Name</span> </th>
                            <th><span><i class="fas fa-cart-plus"></i></span> <span>Products</span> </th>
                            <th><span><i class="fas fa-paperclip"></i></span> <span>Order Status</span> </th>
                            <th><span><i class="fas fa-at"></i></span> <span>Email</span> </th>
                            <th><span><i class="fas fa-phone-alt"></i></span> <span>Phone Number</span> </th>
                            <th><span><i class="fas fa-map-marker-alt"></i></span> <span>Delivery Address</span> </th>
                            <th><span className='cancel'><i class="fas fa-trash"></i></span> <span >Action</span> </th>
                        </thead>

                        <tbody>

                            {clientInfo.map(client=> <ClientOrder key={client._id} value={client}> </ClientOrder> )}















                        </tbody>


                        






                    </table>


                </div>



            </div>
            
















            </div>


            
        </div>
    );
};

export default ManageAllOrder;
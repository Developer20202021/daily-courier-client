import React, { useEffect, useState } from 'react';
import './YourOrder.css';
import YourOrderRow from './YourOrderRow/YourOrderRow';
import useAuthContext from '../AuthContext/UseAuthContext';





const YourOrder = () => {

        const {user} = useAuthContext();

        const [yourOrderInfo, setYourOrderInfo] = useState([]);

        const [msg, setMsg] = useState()




    useEffect(()=>{

        fetch(`https://scary-grave-51351.herokuapp.com/client/delivery/single-client-order?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setYourOrderInfo(data))
        .catch(err=>{
            console.log(err);
        })






    },[msg])



    const cancelOrder = (id)=>{
        console.log(id);

        
        fetch(`https://scary-grave-51351.herokuapp.com/client/delivery/delevery-info-delete/${id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>setMsg(data))
        .catch(err=>{
            console.log(err);
        })


    }

    const deleteOrder = (id)=>{

        console.log(id);

        fetch(`https://scary-grave-51351.herokuapp.com/client/delivery/delevery-info-delete/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>setMsg(data))
        .catch(err=>{
            console.log(err);
        })



    }
















    return (
        <div>

            <div className="client-order-history-container">

            <div className="client-order-history-header">



                <div className="your-order-list-title">
                    <span className='order-list-icon'><i class="fas fa-border-all"></i> </span> 
                    <span className='order-list'>Your Order List</span>
                </div>
            </div>



            <div className="manage-order-table-container">

                <div className="manage-order-table-box">



                    <table className='manage-order-table'>

                        <thead>
                         
                            <th><span><i class="fas fa-cart-plus"></i></span> <span>Products</span> </th>
                            <th><span><i class="fas fa-paperclip"></i></span> <span>Order Status</span> </th>
                            <th><span><i class="fas fa-at"></i></span> <span>Email</span> </th>
                            <th><span><i class="fas fa-phone-alt"></i></span> <span>Phone Number</span> </th>
                            <th><span><i class="fas fa-map-marker-alt"></i></span> <span>Delivery Address</span> </th>
                            <th><span className='cancel'><i class="fas fa-trash"></i></span> <span >Action</span> </th>
                            
                        </thead>

                        <tbody>

                            {yourOrderInfo.length>0?yourOrderInfo.map(client=> <YourOrderRow cancelEvent={ cancelOrder} deleteEvent={deleteOrder} key={client._id} value={client}> </YourOrderRow> ):null}















                        </tbody>


                        






                    </table>


                </div>



            </div>
            
















            </div>


            
        </div>
    );
};

export default YourOrder;
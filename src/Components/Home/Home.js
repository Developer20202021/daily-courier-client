import React, { useEffect, useState } from 'react';
import './Home.css';
import SingleService from './singleService/SingleService';







const Home = () => {

    const images = ['https://i.ibb.co/pfLk34d/delivery-truck-1.jpg','https://i.ibb.co/BPjQwGK/delivery-slide-2.jpg','https://i.ibb.co/5G61sF5/slide-3.jpg']


    const [src, setSrc] = useState(images[0]);
    const [services, setServices]= useState([]);

    let i = 0;
    useEffect(()=>{

       
      
        setInterval(()=>{
           
            if (i>2) {

                return i=0;
                
            }
            setSrc(images[i])
            i++;


          
        

        },2000)

    },[])







    useEffect(()=>{


        fetch('http://localhost:5000/services/all-services')
        .then(res=>res.json())
        .then(data=>setServices(data.allServices))
        .catch(err=>{
            console.log(err);
        })

    },[])











    
    return (
        <div className='home'>
            <div className="home-container">

                <div className="home-slider">

                    <img src={src} alt="" />



                    <div className="more-button">
                        <h2>DAILY COURIER</h2>
                        <button>More Info</button>
                    </div>







                </div>



                <div className="service-container">
                    <h2 className='our-services'><span>\\</span> OUR SERVICES <span>\\</span></h2> 

                    <div className="service-card-container">
                    {services?.map(service=> <SingleService key={service._id} value={service}></SingleService>)}
                    </div>

                </div>



                <div className="contact-form-container">

                    <div className="contact-form-image-form">
                    
                        <div className="contact-side-image">
                            <img src="https://i.ibb.co/M8rr4zT/delivery-truck.jpg" alt="" />
                        </div>

                        <div className="contact-form-box">
                        <h2 className='our-contact'><span>\\</span> CONTACT US <span>\\</span></h2>

                            <div className="contact-form">
                                <input type="text" placeholder='Your name here'/> <input type="text" placeholder='Your email'/><br /><input type="text" placeholder='Subject'/> <input type="text" placeholder='Phone'/><br />
                                <div className="text-area"><textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea></div>
                                <div className="contatc-us-btn">
                                <button>Send</button>
                                 </div>
                            </div>



                        </div>





                    </div>






                </div>

               









































            </div>
            
        </div>
    );
};

export default Home;
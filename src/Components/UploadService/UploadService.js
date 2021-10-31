import React, { useRef } from 'react';
import './UploadService.css';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
const Input = styled('input')({
    display: 'none',
  });













const UploadService = () => {
  
        const title = useRef();

    const date = useRef();

    const description = useRef();


    // const file = useRef();
    const price = useRef();
    const imageUrl = useRef();




   



        const submitFile =()=>{
            const getTile = title.current.value;
            // const getFile = file.current.files[0];
            const getDescription = description.current.value;
            
            const getDate = date.current.value;
        
            const formData = new FormData();
         
        
            // formData.append('file', getFile);
          
            formData.append('description', getDescription)
            formData.append('serviceName',getTile)
            formData.append('price', price.current.value)
            console.log(price);
            console.log(title);

            const allInfo = {
                imgUrl:imageUrl.current.value,
                description:getDescription,
                serviceName:getTile,
                price:price.current.value
            }
            

           
            // axios.post('http://localhost:5000/post',formData,{  
            // headers: {
            //     "Content-Type": "multipart/form-data"
            //   }})
            // console.log(formData);
            
            fetch('http://localhost:5000/services/post-service', {

                method:"POST",
                headers:{
                    "Content-Type":"application/json"

                },
                body:JSON.stringify(allInfo)
            }).then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))




        





        }

















    return (
        <div>
            <div>

<div className="admin-panel-container">

<div className="admin-box">





<div className="volunteer-registerlist">

    <div className="register-header">
        <p>Add Service</p>
    </div>




    <div className="list-container">


        <div className="list-box">

        <form className='add-service' action="">

            <div className="form-container-section">
              
                <div className="addevent-form-conatiner">
                    
                    <div className="event-part-1">

                       <div>
                       <label htmlFor="">Service Name Title  </label>
                        <input ref={title} type="text" placeholder='Event Title'/>
                       </div>
                       <div>
                       <label htmlFor="">Price</label>
                        <input ref={price} type="number" name='price'placeholder='Price'/>
                       </div>
                      

                        <div className='description-textarea'>
                        <label htmlFor="">Description </label>
                        <textarea ref={description} name="" id="" cols="30" rows="6" placeholder='Enter Description'></textarea>
                        </div>
                       






                    </div>

                    <div className="event-part-2">

                    <div>
                    <label htmlFor=""> Date</label>
                    <input ref={date} type="date" />
                    </div>

              <div>
           
                    
              <div>
                  
                    <label htmlFor=""> Image Url</label>
                    <input ref={imageUrl} type="text" />
                    </div>
              </div>






                    </div>

















                 

                </div>

               

                    

          

            </div>
        

            </form>
            
           


        
              
            



















 

           













        </div>
                <div className="submitbutton">
                   
                    <button onClick={submitFile}>Submit</button>
                </div>


















    </div>


























</div>















</div>






















</div>




</div>
            
        </div>
    );
};

export default UploadService;
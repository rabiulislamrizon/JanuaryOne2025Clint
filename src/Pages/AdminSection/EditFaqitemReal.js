import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFaqitemReal = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/faq-item-real/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItem = (event) => {
        event.preventDefault();
        const accodingTitleReal = event.target.accodingTitleReal.value;
        const accodingTextReal = event.target.accodingTextReal.value;
        

        const itemSection = {
            accodingTitleReal,
            accodingTextReal
            
        };

        const url = `http://localhost:5000/faq-item-real/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' FAQ Item is Updated');
            });
    };


    return (
     <>   
    
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
     <form class="contact-form" onSubmit={handleAddItem}>
         <div class="row">
             <div class="col-lg-12">
                 <div class="contact-field p-relative c-name mb-20">
                     <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="accodingTitleReal" defaultValue={item.accodingTitleReal} placeholder="FAQ Title" required />
                 </div>
             </div>

             <div class="col-lg-12">
                 <div class="contact-field p-relative c-name mb-20">
                     <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="accodingTextReal" defaultValue={item.accodingTextReal} placeholder="FAQ Text" required />
                 </div>
             </div>
          

             <div class="slider-btn text-center">
                 <button class="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white " data-animation="fadeInRight"  data-delay=".8s"> FAQ Update </button>
             </div>
         </div>

     </form>

 </div></>
    );
};

export default EditFaqitemReal;
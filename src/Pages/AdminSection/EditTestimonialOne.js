import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTestimonialOne = () => {

    const [testimonial, setTestimonial] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/testimonial-one/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonial(info));
    }, [id]);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const imageOne = event.target.imageOne.value;
        const personNameOne = event.target.personNameOne.value;
        const personTitleOne = event.target.personTitleOne.value;
        const descOne = event.target.descOne.value;

        const updatedTestimonial = {
            imageOne,
            personNameOne,
            personTitleOne,
            descOne
        };

        const url = `http://localhost:5000/update-testimonial-one/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedTestimonial),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Testimonial is updated');
            });
    };

    return (
        <>
        <HeaderBottom></HeaderBottom>
         
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <section className="services-area" style={{ width: '100%' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <h3 className="mb-4 text-center">Update Testimonial</h3>

                                <form className="contact-form" onSubmit={handleTestimonialSection}>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="imageOne"
                                            placeholder="imageOne URL"
                                            defaultValue={testimonial.imageOne}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="personNameOne"
                                            placeholder="Person Name"
                                            defaultValue={testimonial.personNameOne}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="personTitleOne"
                                            placeholder="Person Title"
                                            defaultValue={testimonial.personTitleOne}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="descOne"
                                            placeholder="descOneription"
                                            defaultValue={testimonial.descOne}
                                            required
                                        />
                                    </div>

                                    <div className="text-center">
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Update Testimonial</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EditTestimonialOne;

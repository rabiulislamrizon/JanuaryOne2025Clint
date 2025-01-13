import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTestimonialitemReal = () => {

    const [testimonial, setTestimonial] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/testimonial-real/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonial(info));
    }, [id]);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const imageReal = event.target.imageReal.value;
        const personNameReal = event.target.personNameReal.value;
        const personTitleReal = event.target.personTitleReal.value;
        const descReal = event.target.descReal.value;

        const updatedTestimonial = {
            imageReal,
            personNameReal,
            personTitleReal,
            descReal
        };

        const url = `http://localhost:5000/testimonial-real/${id}`;
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
                                            name="imageReal"
                                            placeholder="Image URL"
                                            defaultValue={testimonial.imageReal}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="personNameReal"
                                            placeholder="Person Name"
                                            defaultValue={testimonial.personNameReal}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="personTitleReal"
                                            placeholder="Person Title"
                                            defaultValue={testimonial.personTitleReal}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            name="descReal"
                                            placeholder="Description"
                                            defaultValue={testimonial.descReal}
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

export default EditTestimonialitemReal;

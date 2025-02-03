import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditCategory = () => {
    const [category, setCategory] = useState({
        categoryName: '',
        
        categoryImage: '',
       
    });

    const navigate = useNavigate(); // Initialize the navigate function
    const { categorySlug } = useParams(); // Extract categorySlug from the URL

    // Fetch the category details based on the categorySlug
    useEffect(() => {
        fetch(`http://localhost:5000/categorys/${categorySlug}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((error) => console.error('Error fetching category:', error));
    }, [categorySlug]);

    // Handle category update
    const handleCategoryUpdate = (event) => {
        event.preventDefault();

        const updatedCategory = {
            categoryName: event.target.categoryName.value,
           
            categoryImage: event.target.categoryImage.value,
           
        };

        const url = `http://localhost:5000/update-category/${categorySlug}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCategory),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Category updated successfully!');
                navigate('/admin/category'); // Redirect to the categories list page
            })
            .catch((error) => console.error('Error updating category:', error));
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section id="services" className="services-area flex items-center py-8 vh-100">
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div className="lg:w-8/8 md:w-11/12 w-full text-center bg-white shadow-lg rounded-lg p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-8">Edit Category</h2>

                                <form className="space-y-6" onSubmit={handleCategoryUpdate}>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black mb-3"
                                            name="categoryName"
                                            placeholder="Category Name"
                                            defaultValue={category.categoryName}
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black mb-3"
                                            name="categoryImage"
                                            placeholder="Category Image URL"
                                            defaultValue={category.categoryImage}
                                            required
                                        />
                                    </div>
                                   
                                    <div>
                                        <button
                                            className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] px-6 text-white after:bg-colorOrangyRed hover:text-white"
                                            type="submit"
                                        >
                                            Update Category
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <HeaderBottom />
            </div>

        </>
    );
};

export default EditCategory;
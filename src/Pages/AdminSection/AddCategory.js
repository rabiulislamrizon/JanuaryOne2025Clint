import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddCategory = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to generate a slug from a string
    const generateSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .trim();
    };

    // Handle category submission
    const handleCategorySection = (event) => {
        event.preventDefault();

        const categoryName = event.target.categoryName.value;
        const mainCategory = event.target.mainCategory.value;
        const categoryTitle = event.target.categoryTitle.value;
        const categoryImage = event.target.categoryImage.value;

        // Generate the slug from the category name
        const categorySlug = generateSlug(categoryName);

        const categorySection = {
            categoryName,
            categoryTitle,
            categoryImage,
            mainCategory,
            categorySlug, // Add the slug to the category object
        };

        const url = `http://localhost:5000/add-category`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categorySection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Your Category has been added successfully!');
                // Navigate to the admin categories page after successful submission
                navigate('/admin/category');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
  <section id="services" className="services-area flex items-center py-12 vh-100">
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="col-lg-8">
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Add Category</h2>

            <form className="space-y-6" onSubmit={handleCategorySection}>
              <div>
                <input
                  type="text"
                  className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black mb-3"
                  name="categoryName"
                  placeholder="Category Name"
                  required
                />
              </div>
              <div>
                <select
                  className="form-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black mb-3"
                  name="mainCategory"
                  required
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                  <option value="category4">Category 4</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black mb-3"
                  name="categoryTitle"
                  placeholder="Category Title"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black mb-3"
                  name="categoryImage"
                  placeholder="Category Image URL"
                  required
                />
              </div>
              <div>
                <button
                  className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white"
                  type="submit"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <HeaderBottom />
</div>

        </>
    );
};

export default AddCategory;
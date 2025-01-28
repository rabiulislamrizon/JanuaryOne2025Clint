import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import HeaderBottom from "../../components/HomePage/HeaderBottom";

const Category = () => {
  const [products, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 5;

  // Fetch products from the server and reverse the array
  useEffect(() => {
    fetch("http://localhost:5000/categorys")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Products:", data); // Debugging
        setCategory(data.reverse()); // Reverse array to display latest products first
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Pagination calculations
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfFirstProduct + productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
  <HeaderBottom />

  <div className="container overflow-x-auto vh-100">
    {/* Add Category Button */}
    <div className="mb-6 text-right mt-5 ">
      <Link
        className="py-2 px-5 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg focus:ring-4 focus:ring-indigo-400"
        to="/admin/add-category"
      >
        Add Category
      </Link>
    </div>

    {/* Page Title */}
    <h1 className="text-2xl font-bold mb-6 text-black">Product List</h1>

    <div className="table-responsive col-lg-12">
      <table className="table table-bordered table-hover">
        <thead className="bg-indigo-600 text-white text-sm uppercase">
          <tr>
            <th scope="col" className="px-6 py-4">Sl. No.</th>
            <th scope="col" className="px-6 py-4">Category Image</th>
            <th scope="col" className="px-6 py-4">Category Name</th>
            <th scope="col" className="px-6 py-4">Category Title</th>
            <th scope="col" className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <tr
                key={product._id}
                className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
              >
                <td className="px-6 py-4 text-black">
                  {(currentPage - 1) * productsPerPage + index + 1}
                </td>
                <td className="px-6 py-4">
                  <img
                    src={product.categoryImage || "placeholder.jpg"}
                    className="rounded w-16 h-16 object-cover shadow-md"
                    alt="Category"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-black">
                  <a
                    href={`/products/${product._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {product.categoryName}
                  </a>
                </td>
                <td className="px-6 py-4 text-green-600 font-semibold">
                  {product.categoryTitle}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/edit-category/${product.categorySlug}`}
                    className="text-indigo-500 hover:text-indigo-700 font-medium"
                  >
                    <i className="fas fa-edit"></i> Edit
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-6 text-center text-gray-400">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-6">
      {totalPages > 1 &&
        Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-md text-sm font-medium ${currentPage === index + 1
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
          >
            {index + 1}
          </button>
        ))}
    </div>
  </div>

  <HeaderBottom />
</>




  );
};

export default Category;
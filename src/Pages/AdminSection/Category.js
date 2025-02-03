import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import HeaderBottom from "../../components/HomePage/HeaderBottom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const categoriesPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:5000/categorys")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  const indexOfFirstCategory = (currentPage - 1) * categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfFirstCategory + categoriesPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  return (
    <>
      <HeaderBottom />
      <div className="container mt-5 vh-100">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="">Category List</h2>
          <Link to="/admin/add-category" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">
            Add Category
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="bg-primary text-white">
              <tr>
                <th>Sl. No.</th>
                <th>Category Image</th>
                <th>Category Name</th>
                {/* <th>Category Title</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.length > 0 ? (
                currentCategories.map((category, index) => (
                  <tr key={category._id}>
                    <td>{(currentPage - 1) * categoriesPerPage + index + 1}</td>
                    <td>
                      <img
                        src={category.categoryImage || "placeholder.jpg"}
                        alt="Category"
                        className="img-thumbnail"
                        width="50"
                      />
                    </td>
                    <td>
                      
                        {category.categoryName}
                     
                    </td>
                    {/* <td className="text-success">{category.categoryTitle}</td> */}
                    <td>
                      <Link to={`/edit-category/${category.categorySlug}`} className="btn btn-sm btn-warning">
                        <i className="fas fa-edit"></i> Edit
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <nav>
          <ul className="pagination justify-content-center">
            {totalPages > 1 &&
              Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <HeaderBottom />
    </>
  );
};

export default Category;

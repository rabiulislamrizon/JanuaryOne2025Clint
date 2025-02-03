import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBottom from "../components/HomePage/HeaderBottom";
import Slugify from "react-slugify";
import ReactQuill from "react-quill"; // Import react-quill for text editor
import "react-quill/dist/quill.snow.css"; // Import styles for the editor
import MargingTop from "../components/HomePage/MargingTop";

const AddPost = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState(""); // State for the description
    const [postTitle, setPostTitle] = useState(""); // State for post title
    const [slug, setSlug] = useState(""); // State for post slug

    useEffect(() => {
        fetch(`http://localhost:5000/categorys`)
            .then((res) => res.json())
            .then((info) => setCategories(info));
    }, []);

    const handleAddPost = (event) => {
        event.preventDefault();

        const author = "admin"; // Hidden author for all posts
        const postDate = new Date().toLocaleDateString('en-US', {

            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }); // Format date as "January 25, 2025"
        const postTitle = event.target.postTitle.value;
        const authorName = event.target.authorName.value;
        const featuredImage = event.target.featuredImage.value;
        const postCategoryName = event.target.postCategoryName.value;
        const titleSlug = event.target.titleSlug.value;

        const postInfo = {
            authorName,
            author,
            postDate,
            postTitle,
            featuredImage,
            description,
            postCategoryName,
            titleSlug,
        };

        const url = `http://localhost:5000/add-post`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate("/all-post"); // Redirect to home page after successful post addition
            });
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setPostTitle(title);
        setSlug(Slugify(title)); // Generate slug when post title changes
    };

    return (
        <>
            <HeaderBottom />


            <div className="container d-flex justify-content-center align-items-center  ">
                <div className=" container d-flex justify-content-center align-items-center  container mt-5 mb-5 vh-100"> <div className="  card p-4 shadow-lg" style={{ maxWidth: '800px', width: '100%' }}>
                    <h2 className="text-center mb-4">Add New Blog Post</h2>
                    <form onSubmit={handleAddPost}>

                        {/* Author Username (default hidden) */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="author"
                                className="form-control"
                                value="admin" // Default value as admin
                                disabled
                            />
                        </div>

                        {/* Author Name (default hidden) */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="authorName"
                                className="form-control"
                                placeholder="Meta Title"
                            />
                        </div>

                        {/* Post Title */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="postTitle"
                                className="form-control"
                                placeholder="Post Title"
                                value={postTitle}
                                onChange={handleTitleChange}
                                required
                            />
                        </div>

                        {/* Slug */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="titleSlug"
                                className="form-control"
                                placeholder="Post Title Slug"
                                value={slug}
                                readOnly
                                required
                                hidden
                            />
                        </div>
                        {/* Category Name */}


                        <div className="text-black">
                            <select
                                name="postCategoryName"
                                className="form-select w-100 px-3 py-2 mb-3 border border-gray-300 rounded-lg text-black"
                                required
                            >
                                <option value="" disabled selected className="text-black">
                                    Select Category
                                </option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category.categoryName} className="text-black">
                                        {category.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>



                        {/* Featured Image */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="featuredImage"
                                className="form-control"
                                placeholder="Featured Image URL"
                                required
                            />
                        </div>

                        <ReactQuill
                            value={description}
                            onChange={setDescription}
                            placeholder="Write your blog post here..."
                            modules={{
                                toolbar: [
                                    [{ 'header': [1, 2, 3, false] }], // Include header levels explicitly
                                    [{ 'font': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['bold', 'italic', 'underline'],
                                    ['link',], // Ensure image and link tools are included
                                    [{ 'align': [] }],
                                ],
                            }}
                            formats={[
                                'header', 'font', 'list', 'bold', 'italic', 'underline', 'link', 'image', 'align'
                            ]} // Add all necessary formats
                            style={{ height: '200px', overflow: 'auto' }} // Corrected inline style
                        />

                        {/* Submit Button */}
                        <div className="text-center mt-5">
                            <input className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" type="submit" value="Add Post" />
                        </div>
                    </form>

                </div></div>
                <MargingTop></MargingTop>
            </div>




        </>
    );
};

export default AddPost;

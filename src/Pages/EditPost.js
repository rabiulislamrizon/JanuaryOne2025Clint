import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import CSS for the editor
import MargingTop from '../components/HomePage/MargingTop';

const EditPost = () => {
    const [editBlog, setBlog] = useState({}); // State to store blog details
    const [description, setDescription] = useState(''); // State for description
    const [selectedCategory, setSelectedCategory] = useState(''); // State for category selection
    const { titleSlug } = useParams(); // Get titleSlug from URL params

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categorys`)
            .then((res) => res.json())
            .then((info) => setCategories(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${titleSlug}`) // Fetch blog post using titleSlug
            .then((res) => res.json())
            .then((info) => {
                setBlog(info);
                setDescription(info.description); // Set description on load
                setSelectedCategory(info.postCategoryName); // Set selected category
            });
    }, [titleSlug]);

    const handleBlog = (event) => {
        event.preventDefault();
        const authorName = event.target.authorName.value;
        const author = event.target.author.value;
        const postDate = event.target.postDate.value;
        const postTitle = event.target.postTitle.value;
        const featuredImage = event.target.featuredImage.value;
        const titleSlug = event.target.titleSlug.value;

        const postSection = {
            authorName,
            author,
            postDate,
            postTitle,
            featuredImage,
            postCategoryName: selectedCategory, // Use state for category
            description, // Use description state directly here
            titleSlug
        };

        const url = `http://localhost:5000/blog-update/${titleSlug}`; // Update the post using titleSlug
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postSection),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Blog post is updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <MargingTop />

            <section className="">
                <div className="container mt-5 mb-5 vh-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <h2 className="mb-5">Update Blog Post</h2>

                            <form className="contact-form" onSubmit={handleBlog}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="authorName" defaultValue={editBlog.authorName} placeholder="Meta Title" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="postDate" defaultValue={editBlog.postDate} placeholder="Date" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="postTitle" defaultValue={editBlog.postTitle} placeholder="Blog Title" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="featuredImage" defaultValue={editBlog.featuredImage} placeholder="Featured Image" required />
                                        </div>
                                    </div>

                                    {/* Category Selection */}
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <select
                                                name="postCategoryName"
                                                className="form-select w-100 px-3 py-2 mb-3 border border-gray-300 rounded-lg text-black"
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                required
                                            >
                                                <option value="" disabled>
                                                    Select Category
                                                </option>
                                                {categories.map((category) => (
                                                    <option key={category._id} value={category.categoryName}>
                                                        {category.categoryName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Text Editor */}
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <ReactQuill
                                                value={description}
                                                onChange={setDescription}
                                                placeholder="Write your blog post here..."
                                                modules={{
                                                    toolbar: [
                                                        [{ 'header': [1, 2, 3, false] }],
                                                        [{ 'font': [] }],
                                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                        ['bold', 'italic', 'underline'],
                                                        ['link'],
                                                        [{ 'align': [] }],
                                                    ],
                                                }}
                                                formats={[
                                                    'header', 'font', 'list', 'bold', 'italic', 'underline', 'link', 'image', 'align'
                                                ]}
                                                style={{ height: '300px', overflow: 'auto' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Hidden Fields */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="titleSlug" defaultValue={editBlog.titleSlug} required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="author" defaultValue={editBlog.author} required />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="slider-btn">
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">
                                            Update Post
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <MargingTop />
                        </div>
                    </div>
                </div>
                <MargingTop />
            </section>
        </>
    );
};

export default EditPost;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import CSS for the editor
import MargingTop from '../components/HomePage/MargingTop';

const EditPost = () => {
    const [editBlog, setBlog] = useState([]); // State to store blog details
    const [description, setDescription] = useState(''); // State for description
    const { titleSlug } = useParams(); // Get titleSlug from URL params

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${titleSlug}`) // Fetch blog post using titleSlug
            .then((res) => res.json())
            .then((info) => {
                setBlog(info);
                setDescription(info.description); // Set description on load
            });
    }, [titleSlug]);

    const handleBlog = (event) => {
        event.preventDefault();
        const authorName = event.target.authorName.value;
        const author = event.target.author.value;
        const postDate = event.target.postDate.value;
        const postTitle = event.target.postTitle.value;
        const featuredImage = event.target.featuredImage.value;
        const postCategoryName = event.target.postCategoryName.value;
        const titleSlug = event.target.titleSlug.value;

        const postSection = {
            authorName,
            author,
            postDate,
            postTitle,
            featuredImage,
            postCategoryName,
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
            .then((result) => {
                alert('Blog post is updated');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <MargingTop></MargingTop>

            <section className="">
                <div className="container mt-5 mb-5 vh-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <h2 className="mb-5">Update Blog post</h2>

                            <form className="contact-form" onSubmit={handleBlog}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="authorName" defaultValue={editBlog.authorName} placeholder="Author Name" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 ">
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
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="postCategoryName" defaultValue={editBlog.postCategoryName} placeholder="Post Category Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <ReactQuill
                                                value={description} // Use description state for the editor
                                                onChange={setDescription} // Handle change for the description
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

                                    <div className="col-lg-12 col-md-12 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="titleSlug" defaultValue={editBlog.titleSlug} placeholder="titleSlug" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="author" defaultValue={editBlog.author} placeholder="Author Name" required />
                                        </div>
                                    </div>

                                    <div className="slider-btn">
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Update Post</button>
                                    </div>
                                </div>
                            </form>
                            <MargingTop></MargingTop>
                        </div>
                    </div>
                </div>
                <MargingTop></MargingTop>
            </section>
        </>
    );
};

export default EditPost;

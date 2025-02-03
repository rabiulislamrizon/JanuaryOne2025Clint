import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import HeaderBottom from "../HomePage/HeaderBottom";

const UpdateProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${id}`)
            .then((res) => res.json())
            .then((info) => {
                setProfile(info);
                setPreviewImage(info.profileImg); // Set initial preview image
            });
    }, [id]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Create a temporary URL for the file
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const fileInput = event.target.profileImg.files[0];
        try {
            let profileImg = profile.profileImg; // Keep existing image if no new image is uploaded

            if (fileInput) {
                const formData = new FormData();
                formData.append("image", fileInput);
                formData.append("key", "9b9a8d0dcddf9fdbc0d69db3ef376eac");

                const imgbbResponse = await axios.post(
                    "https://api.imgbb.com/1/upload",
                    formData
                );

                profileImg = imgbbResponse.data.data.url;
            }

            const userUpdate = {
                userName,
                profileImg,
            };

            const url = `http://localhost:5000/update-profile/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userUpdate),
            })
                .then((res) => res.json())
                .then(() => {
                    window.location.href = "/dashboard";
                });
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    };

    return (
       <>

       <HeaderBottom></HeaderBottom>
       
        <div className="d-flex justify-content-center align-items-center vh-100">
       <form className="form w-50 p-4 bg-light shadow" onSubmit={handleUpdateProfile}>
           <h2 className="text-center mb-4">Update Profile</h2>
           <div className="mb-3">
               <label htmlFor="userName" className="form-label">Your Name</label>
               <input
                   type="text"
                   id="userName"
                   name="userName"
                   defaultValue={profile.userName}
                   placeholder="Enter your full name"
                   className="form-control"
                   required
               />
           </div>
           <div className="mb-3">
               <label htmlFor="profileImg" className="form-label">Upload Profile Image</label>
               <input
                   type="file"
                   id="profileImg"
                   className="form-control"
                   name="profileImg"
                   accept="image/*"
                   onChange={handleImageChange}
               />
               {previewImage && (
                   <div className="mt-2">
                       <img
                           src={previewImage}
                           alt="Preview"
                           style={{ maxWidth: '100px', maxHeight: '100px' }}
                           className="img-thumbnail"
                       />
                   </div>
               )}
           </div>
           <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white w-100">
               Update Account
           </button>
       </form>
   </div></>
    );
};

export default UpdateProfile;

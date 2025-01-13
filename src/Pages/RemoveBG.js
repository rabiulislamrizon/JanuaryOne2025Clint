import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function RemoveBG() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
    setProcessedImage(null);
    setError("");
  };

  const handleRemoveBackground = async () => {
    if (!selectedImage) {
      setError("Please upload an image before removing the background.");
      return;
    }

    const formData = new FormData();
    formData.append("image_file", selectedImage);

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg", // Replace with your API endpoint
        formData,
        {
          headers: {
            "X-Api-Key": "YOUR_API_KEY", // Replace with your Remove.bg API key
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob", // Ensure response is binary data (blob)
        }
      );

      const imageBlob = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(imageBlob);
      setProcessedImage(imageUrl);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to remove background. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Image Background Remover</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <div className="form-group">
              <label htmlFor="imageUpload" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="imageUpload"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </div>
            {selectedImage && (
              <div className="my-3">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Uploaded"
                  className="img-fluid"
                />
              </div>
            )}
            <button
              className="btn btn-primary btn-block mt-3"
              onClick={handleRemoveBackground}
              disabled={loading}
            >
              {loading ? "Removing Background..." : "Remove Background"}
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </div>

      {processedImage && (
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h3 className="text-center">Processed Image</h3>
            <div className="card shadow p-4 text-center">
              <img src={processedImage} alt="Processed" className="img-fluid" />
              <a
                href={processedImage}
                download="background_removed_image.png"
                className="btn btn-success btn-block mt-3"
              >
                Download Image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RemoveBG;

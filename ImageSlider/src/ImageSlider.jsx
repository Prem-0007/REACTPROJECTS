import { useState, useEffect } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";

export default function ImageSlider({ url }) {
  const [image, setImage] = useState([]);
  const [slide, setSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();

      setImage(data.images || []);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  function nextSlide() {
    if (image.length === 0) return;
    setSlide((prev) => (prev + 1) % image.length);
  }

  function prevSlide() {
    if (image.length === 0) return;
    setSlide((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    );
  }

  if (loading) return <div>Loading data! Please wait...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="img-container">
      <div className="slider">
        <BsArrowLeftCircleFill
          className="arrow left"
          onClick={prevSlide}
        />

        {image.length > 0 ? (
          <img
            src={image[slide]}
            alt="car"
            className="current-image"
          />
        ) : (
          <p>No images found</p>
        )}

        <BsArrowRightCircleFill
          className="arrow right"
          onClick={nextSlide}
        />

    
        <div className="dots-container">
          {image.map((_, index) => (
            <span
              key={index}
              className={`dot ${slide === index ? "active" : ""}`}
              onClick={() => setSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
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

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    setLoading(true);

    async function fetchImages() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();

        setImage(data.images); 
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchImages();

    return () => {
      controller.abort();
    };
  }, [url]);

  function nextSlide() {
    setSlide((prev) => (prev + 1) % image.length);
  }

  function prevSlide() {
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

    {image.length > 0 && (
      <img
        src={image[slide]}
        alt="car"
        className="current-image"
      />
    )}

    <BsArrowRightCircleFill
      className="arrow right"
      onClick={nextSlide}
    />
  </div>
</div>

  );
}

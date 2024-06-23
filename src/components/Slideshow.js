import React, { useState, useEffect } from 'react';
import '../stylesheets/Slideshow.css';
import slideshowCaptions from '../assets/slideshow_captions.json';

async function loadImage(filename) {
  try {
    const image = await import(`../assets/img/slideshow/${filename}`);
    return image.default;
  } catch (error) {
    console.error('Error loading image:', filename, error);
    return null;
  }
}

function Slideshow({ interval, offset, startIndex }) {
  const [currentSlide, setCurrentSlide] = useState(startIndex);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadSlides = async () => {
      const loadedSlides = await Promise.all(slideshowCaptions.map(async (item) => {
        const src = await loadImage(item.filename);
        return { src, caption: item.caption };
      }));
      setSlides(loadedSlides.filter(slide => slide.src));
    };

    loadSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const startAutoSlide = () => {
      const autoSlide = setInterval(() => {
        setCurrentSlide((prev) => (prev + 3) % slides.length);
      }, interval);
      return autoSlide;
    };

    const timeout = setTimeout(() => {
      const autoSlide = startAutoSlide();
      return () => clearInterval(autoSlide);
    }, offset);

    return () => clearTimeout(timeout);
  }, [slides, interval, offset]);

  if (slides.length === 0) {
    return null; // or return a loading spinner
  }

  return (
    <div className="slideshow">
      <>
        <img src={slides[currentSlide].src} alt={`Slide ${currentSlide}`} className="slideshow-image" />
        <p className="slideshow-caption">{slides[currentSlide].caption}</p>
      </>
    </div>
  );
}

export default Slideshow;

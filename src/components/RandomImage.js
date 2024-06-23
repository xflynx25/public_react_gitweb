import React, { useState, useEffect } from 'react';
import imageData from '../assets/imageprompts.json';
import getHourlyPseudoRandomIdx from './helpers';

function RandomImage({ onPromptUpdate }) {  
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (imageData.images.length > 0) {
      const randomImageIdx = getHourlyPseudoRandomIdx(imageData.images.length);
      const randomImage = imageData.images[randomImageIdx];
      const randomImageSrc = require(`../assets/img/ai/${randomImage.id}`);
      setImageSrc(randomImageSrc);
      onPromptUpdate(randomImage.prompt); // Pass the prompt back to Home
    }
  }, [onPromptUpdate]);

  return (
    <div className="image-container">
      <div>
        {imageSrc && <img src={imageSrc} alt="Random AI generated" />}
      </div>
    </div>
  );
}

export default RandomImage;

import React, { useEffect } from 'react';
import './Architecture.css'; // Ensure to create this CSS file for styles
import archiimg from "../images/1-11.jpg";
import image2 from "../ANJUNA VILLA/MELHORE STAYS-11.jpg";
import image3 from "../ANJUNA VILLA/MELHORE STAYS-12.jpg";
import image4 from "../ANJUNA VILLA/MELHORE STAYS-13.jpg";
import image5 from "../ANJUNA VILLA/MELHORE STAYS-13.jpg";
import image6 from "../ANJUNA VILLA/MELHORE STAYS-15.jpg";
import image7 from "../ANJUNA VILLA/MELHORE STAYS-10.jpg";
import image8 from "../ANJUNA VILLA/MELHORE STAYS-18.jpg";

// Sample image data
const images = [
  { id: 1, src: archiimg, alt: 'Architecture Image 1' },
  { id: 2, src: image2, alt: 'Architecture Image 2' },
  { id: 3, src: image3, alt: 'Architecture Image 3' },
  { id: 4, src: image4, alt: 'Architecture Image 4' },
  { id: 4, src: image5, alt: 'Architecture Image 4' },
  { id: 4, src: image6, alt: 'Architecture Image 4' },
  { id: 4, src: image7, alt: 'Architecture Image 4' },
  { id: 4, src: image8, alt: 'Architecture Image 4' },
];

function Architecture() {
  useEffect(() => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.image-item').forEach(imageDiv => {
      imageDiv.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.getElementsByTagName('img')[0].src;
        captionText.innerHTML = this.getElementsByTagName('img')[0].alt;
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    const images = document.querySelectorAll('.image-item img');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    images.forEach(image => {
      observer.observe(image);
    });
  }, []);

  return (
    <div className="architecture-gallery">
      <h1>Architecture Details</h1>
      <p>Here you can include more detailed information about architecture projects.</p>

      <div className="image-grid">
        {images.map(image => (
          <div key={image.id} className="image-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Modal for displaying the image */}
      <div id="modal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modalImage" />
        <div id="caption"></div>
      </div>
    </div>
  );
}

export default Architecture;

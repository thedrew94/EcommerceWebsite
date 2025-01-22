import { useState } from "react";

function renderSlides({ slides = [], activeSlide = 0 }) {
  const selectedSlide = slides.at(activeSlide);
  if (!selectedSlide) return;
  return [
    <li key={`slide_${activeSlide}`} className="review_slide">
      <span className="review_quote review_quote_open">&quot;</span>
      <span className="review_quote review_quote_close">&quot;</span>
      <span className="review_slide_photo" role="img" aria-label="Reviewer's photo"></span>
      <p className="review_username">{selectedSlide.reviewUser || "No review user provided."}</p>
      <p className="review_comment">{selectedSlide.reviewBody || "No review body provided."}</p>
    </li>,
  ];
}

export default function ReviewSlider({ reviews = [{}] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="review_slider">
        <ul>{renderSlides({ slides: reviews, activeSlide })}</ul>
      </div>
      <div className="slider_controller">
        {reviews &&
          reviews.map((_, i) => {
            return (
              <button
                key={`review_${i}`}
                className={`slide_btn ${activeSlide === i && "slide_active"}`}
                data-transform="0"
                onClick={() => setActiveSlide(i)}
              ></button>
            );
          })}
      </div>
    </>
  );
}

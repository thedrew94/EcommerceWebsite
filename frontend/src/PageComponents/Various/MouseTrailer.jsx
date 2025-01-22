import { useEffect } from "react";

export default function MouseTrailer() {
  useEffect(() => {
    const mouseTrailer = document.getElementById("mouse_trailer");
    function handleMouseMove(e) {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e);

      if (interacting) {
        mouseTrailer.classList.add("mouse_trailer_open");
        mouseTrailer.innerHTML = `
          <p>Category: ${interactable.dataset.type ? interactable.dataset.type : "Not assigned"}</p>
        `;
      } else {
        mouseTrailer.classList.remove("mouse_trailer_open");
        mouseTrailer.innerHTML = "";
      }
    }

    function animateTrailer(e) {
      const x = e.clientX + 20;
      const y = e.clientY + 20;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };

      mouseTrailer.animate(keyframes, {
        duration: 1500,
        fill: "forwards",
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="mouse_trailer" id="mouse_trailer"></div>;
}

// Local override of al_img_tools' medium-zoom initialization.
// Mirrors the gem's assets/al_img_tools/js/zoom.js but adds a viewport
// `margin` so tall publication figures are scaled to fit within
// (viewport - 2*margin) and are never clipped at the top/bottom edges.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof mediumZoom !== "function") {
    return;
  }
  mediumZoom("[data-zoomable]", {
    // Append alpha to theme background color to keep content visible under zoom.
    background: `${getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")}ee`,
    // Breathing room around the enlarged image so it never touches the edges.
    margin: 100,
  });
});

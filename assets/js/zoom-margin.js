// Local override of al_img_tools' medium-zoom initialization.
// Mirrors the gem's assets/al_img_tools/js/zoom.js but (a) adds a viewport
// `margin` so tall publication figures are scaled to fit within
// (viewport - 2*margin) and are never clipped at the top/bottom edges, and
// (b) is desktop-only: on mobile the figure already stacks above the text at
// full width, and the zoom margin would only shrink it, so no zoom is attached.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof mediumZoom !== "function") {
    return;
  }
  // Only enable click-to-zoom on desktop-sized viewports (>= 768px).
  if (!window.matchMedia("(min-width: 768px)").matches) {
    return;
  }
  mediumZoom("[data-zoomable]", {
    // Append alpha to theme background color to keep content visible under zoom.
    background: `${getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")}ee`,
    // Breathing room around the enlarged image so it never touches the edges.
    margin: 100,
  });
});

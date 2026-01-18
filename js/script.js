document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.href && link.target !== "_blank") {
      e.preventDefault();
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location = link.href;
      }, 300);
    }
  });
});

window.onload = () => {
  document.body.style.opacity = "1";
};

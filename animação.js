document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".js-animado");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animar");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, 
    }
  );

  elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
  });
});

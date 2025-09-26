
function mudarTema() {
  const body = document.body;
  const darkImage = document.getElementById("dark-image");

  if (body.className === "claro-escuro") {
    body.className = "escuro-claro";
    darkImage.src = "dark.png"; 
  } else {
    body.className = "claro-escuro";
    darkImage.src = "light.png"; 
  }
}

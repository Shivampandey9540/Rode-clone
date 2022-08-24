document.getElementById("prodoc").addEventListener("mouseenter", () => {
  document.getElementById("Product-section").classList.remove("hidden");
  document.getElementById("Product-section").classList.add("flex");
});

document.getElementById("prodoc").addEventListener("click", () => {
  document.getElementById("Product-section").classList.add("hidden");
  document.getElementById("Product-section").classList.remove("flex");
});

document.getElementById("MicroPhones").addEventListener("click", () => {
  document.getElementById("MicroPhones-section").classList.remove("hidden");
  document.getElementById("MicroPhones-section").classList.add("flex");

  document.getElementById("Headphones-section").classList.add("hidden");
  document.getElementById("Interface-section").classList.add("hidden");
  document.getElementById("Software-section").classList.add("hidden");
  document.getElementById("Access-section").classList.add("hidden");
});

document.getElementById("Headphone").addEventListener("click", () => {
  document.getElementById("Headphones-section").classList.remove("hidden");
  document.getElementById("Headphones-section").classList.add("flex");
  document.getElementById("MicroPhones-section").classList.add("hidden");
  document.getElementById("Interface-section").classList.add("hidden");
  document.getElementById("Software-section").classList.add("hidden");
  document.getElementById("Access-section").classList.add("hidden");
});
document.getElementById("Interface").addEventListener("click", () => {
  document.getElementById("Interface-section").classList.remove("hidden");
  document.getElementById("Interface-section").classList.add("flex");
  document.getElementById("Headphones-section").classList.add("hidden");

  document.getElementById("MicroPhones-section").classList.add("hidden");
  document.getElementById("Software-section").classList.add("hidden");
  document.getElementById("Access-section").classList.add("hidden");
});
document.getElementById("software").addEventListener("click", () => {
  document.getElementById("Software-section").classList.remove("hidden");
  document.getElementById("Software-section").classList.add("flex");

  document.getElementById("MicroPhones-section").classList.add("hidden");
  document.getElementById("Interface-section").classList.add("hidden");
  document.getElementById("Access-section").classList.add("hidden");
});
document.getElementById("Access").addEventListener("click", () => {
  document.getElementById("Access-section").classList.remove("hidden");
  document.getElementById("Access-section").classList.add("flex");
  document.getElementById("MicroPhones-section").classList.add("hidden");
  document.getElementById("Interface-section").classList.add("hidden");
  document.getElementById("Software-section").classList.add("hidden");
  document.getElementById("MicroPhones-section").classList.add("hidden");
});

document.getElementById("burger").addEventListener("click", () => {
  if (document.getElementById("nav-links").classList.contains("flex")) {
    document.getElementById("nav-links").classList.add("sm:hidden");
    document.getElementById("nav-links").classList.remove("flex");
  } else if (
    document.getElementById("nav-links").classList.contains("sm:hidden")
  ) {
    document.getElementById("nav-links").classList.add("flex");
    document.getElementById("nav-links").classList.remove("sm:hidden");
  }
});

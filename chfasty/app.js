// const brandBox = Array.from(document.querySelectorAll('.BRAND_SELECTOR'));
const brandBox = document.querySelectorAll(".LOGO");

for (box = 0; box < brandBox.length; box++) {
  const brands = document.getElementById("BRANDS");
  brandBox[box].addEventListener("mouseenter", (e) => {
    // Dodawanie wybranego elementu na koniec #BRANDS, by był wyżej niż inne.
    brands.append(e.target)
  });
}
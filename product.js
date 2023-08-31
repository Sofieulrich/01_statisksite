//https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .subcategory").textContent = product.subcategory;
  document.querySelector(".basecolour").textContent = product.basecolour;
  document.querySelector(".season").textContent = product.season;
  document.querySelector(".productdisplayname").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

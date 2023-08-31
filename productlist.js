const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category == null) {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then((res) => res.json())
    .then(showProducts);
}
function showProducts(products) {
  //looper og kalder show product
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subcategory").textContent = product.subcategory;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount > 0) {
    //produktet er på tilbud
    copy.querySelector(".discount").textContent = product.discount;
  } else {
    copy.querySelector(".remove_discount").remove();
  }

  copy.querySelector(".læsmere").setAttribute("href", `produkt.html?id=${product.id}`);
  //appende
  document.querySelector(".produktliste_grid").appendChild(copy);
}

/* <article class="smallProduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="produkttype">T-shirts / Nike</p>
            <p class="pris">DKK 1595,-</p>
            <a class="læsmere" href="produkt.html">LÆS MERE</a>
          </article>

/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/

const cardsContainer = document.querySelector(".main__allNews-cards");
document.addEventListener("DOMContentLoaded", function () {
  products.forEach((product) => {
    displayCard(product);
  });
});

function displayCard(product) {
  const card = document.createElement("div");
  card.classList.add("main__allNews-card");
  card.setAttribute("data-category", `${product.category}`);
  card.innerHTML = `
    <div class="main__allNews-card-image">
        <img src="${product.img}" alt="${product.heading}"/>
    </div>
    <div class="main__allNews-card-info">
        <div class="main__allNews-card-info-date">
            <h1>${product.category}</h1>
            <p>${product.date}</p>
        </div>
        <h2>${product.heading}</h2>
        <p>${product.info}</p>
    </div>
    <hr>
    `;
  cardsContainer.append(card);

  const hr = document.createElement("hr");
  cardsContainer.append(hr);
}

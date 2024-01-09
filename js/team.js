const cardsContainer = document.querySelector(".main__collective-wrapper");

document.addEventListener("DOMContentLoaded", function () {
  creators.forEach((creator) => {
    displayCard(creator);
  });
});

function displayCard(creator) {
  const card = document.createElement("li");
  card.classList.add("main__collective-wrapper-element");
  card.innerHTML = `
    <div class="main__collective-block">
        <div class="main__collective-block-image">
            <img class="animate-on-scroll"
            src="${creator.img}"
            alt="forest"
            />
        </div>
        <div class="main__collective-name">

            <h1>${creator.name}</h1>
            <div class="main__collective-medias"></div>
        </div>
        <div class="main__collective-about">
            <p>
            ${creator.info.first}
            </p>
            <p>
            ${creator.info.second}
            </p>
            <p>
            ${creator.info.third}
            </p>
        </div>
    </div>
    `;
  const socialLinkContainer = card.querySelector(".main__collective-medias");

  let htmlString = "<ul class='main__collective-name-media'>";

  for (const platform in creator.media) {
    const href = creator.media[platform];
    if (href) {
      htmlString += `<li class='main__collective-name-links'><a class="social" href="${href}" target="_blank"><i class="fab fab fa-${platform.toLowerCase()}"></i></a></li>`;
    }
  }

  htmlString += "</ul>";
  socialLinkContainer.innerHTML = htmlString;

  cardsContainer.appendChild(card);
}

const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container");

btn.addEventListener("click", () => {
  container.innerHTML = `<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  };

  fetch(
    `https://google-web-search1.p.rapidapi.com/?query=${input.value}&limit=20&related_keywords=true`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let html = "";
      response.results.forEach((element) => {
        console.log(element);
        let resultDiv = `<div class="result">
              <p id="domain">${element.url}</p>
              <a href="${element.url}"><h2 id="title">${element.title}</h2></a>
              <p id="description">
                ${element.description}
              </p>
            </div>`;
        html += resultDiv;
      });
      container.innerHTML = html;
    })
    .catch((err) => console.error(err));
});

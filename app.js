document.querySelector(".get-fact").addEventListener("click", () => {
  let factText = document.querySelector(".fact-text");
  fetch("https://asli-fun-fact-api.herokuapp.com/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.data;
      factText.textContent = data.fact;
    });
});

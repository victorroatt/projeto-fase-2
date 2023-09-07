const sessionStorage = {
  sessionName: "petshop",

  get: () => {
    return window.sessionStorage[sessionStorage.sessionName]
      ? JSON.parse(window.sessionStorage[sessionStorage.sessionName])
      : null;
  },

  // object

  set: (values) => {
    window.sessionStorage[sessionStorage.sessionName] = JSON.stringify(values);
  },

  clear: () => {
    window.sessionStorage[sessionStorage.sessionName] = null;
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const form_search = document.getElementById("form_search");
  const cards = document.getElementsByClassName("card");

  form_search.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form_search);
    const data = {};

    formData.forEach(function (value, key) {
      data[key] = value;
    });

    for (let i = 0; i < cards.length; i++) {
      const itemText = cards[i].textContent
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (itemText.includes(data.search)) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  });
});

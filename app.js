console.log("Let's get this party started!");

const gifs = document.getElementById("gif-area");

function addGif(res) {
  let numRes = res.data.length;
  if (numRes) {
    let randomIdx = Math.floor(Math.random() * numRes);
    let newCol = document.createElement("div");
    newCol.className = "col-md-4 col-12 mb-4";
    let newGif = document.createElement("img");
    newGif.src = res.data[randomIdx].images.original.url;
    newGif.className = "w-100";
    newCol.appendChild(newGif);
    gifs.appendChild(newCol);
  }
}

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  let searchTerm = document.querySelector("#search").value;
  document.querySelector("#search").value = "";

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

document.querySelector("#remove").addEventListener("click", function () {
  gifs.innerHTML = "";
});

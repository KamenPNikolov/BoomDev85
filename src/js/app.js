import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";
  let results = [];
  fetch(url)
    .then(response => {
    return response.json();
  }).then(data => 
          {//console.log(data);
           results = data["results"];

    let pokemons = results.map(result => {
                  return result["name"];
                  });
    for(let i=0;i<pokemons.length;i++){
        let il = document.createElement("li");
        il.innerText = pokemons[i];
        ul.appendChild(il);
      }

});
});

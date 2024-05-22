var weather = prompt("Enter your weather(hot,sunny, cloudy, windy, rainy, or find something else!) ✅");
if (weather == "hot") {
  document.write(`<body><div class="card m-auto mt-5" style="width: 18rem;">` +
    `<img src="high temperature.jpg" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body ">` +
    `<p class="card-text  "><h2> High Temperature 🌡️</h2> <br> <h3>🌤️Don't go out side stay at home.🏠</h3></p>
     </div>` +
    `</div>`)
} else if (weather == "sunny") {
  document.write(`<body><div class="card m-auto mt-5" style="width: 18rem;">` +
    `<img src="sunny.gif" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body">` +
    `<p class="card-text  "><h2> Sunny🥵</h2> <br> <h3>Proper intake of water🥤</h3></p>
  </div>` +
    `</div>`)
} else if (weather == "rainy") {
  document.write(`<body><div class="card m-auto mt-5" style="width: 18rem;">` +
    `<img src="rainy.webp" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body">` +
    `<p class="card-text  "><h2>Rainy Weather☔</h2> <br> <h3>Listen To The Rhythem of Falling Rain🌧️</h3></p>
  </div>` +
    `</div>`)
} else if (weather == "cloudy") {
  document.write(`<body><div class="card m-auto mt-5" style="width: 18rem;">` +
    `<img src="cloudy.avif" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body bg-dark">` +
    `<p class="card-text  "><h2 class="text-light">Cloudy ☁️</h2> <br> <h3 class="text-light">Enjoy Beautifull Cloudy Weather😍</h3></p>
  </div>` +
    `</div>`)
} else if (weather == "windy") {
  document.write(`<body><div class="card m-auto mt-5" style="width: 18rem;">` +
    `<img src="windy.jpeg" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body ">` +
    `<p class="card-text  "><h2 class="">wind's blowing🌬️ </h2> <br> <h3 class="">"Going Where The Wind Blows!"</h3></p>
  </div>` +
    `</div>`)
} else {
  document.write(`<body><div class="card m-auto mt-5" style="width: 18rem;">` +
    `<img src="gif2.gif" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body bg-dark">` +
    `<p class="card-text  "><h2 class=" text-warning">Nothing to find more only weather🤣😝 </h2> </p>
</div>` +
    `</div>`)
}






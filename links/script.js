const cnc = document.getElementById("tmpcmp")

function makeLink(url, title, status, image) {
    cnc.insertAdjacentHTML('afterbegin', 
    `
<div class="website">
  <h2>${title}</h2>
  <a href="${url}"><img src="${image}"></a>
  <h3 class="${status.split(' ')[0]}">${status}</h3>
</div>
    ` 
    )
}

makeLink(
    "https://play2048.co",
    "2048",
    "Generic",
    "2048.png"
)
makeLink(
    "https://neal.fun",
    "Neal.fun",
    "Trending",
    "nf.png"
)
makeLink(
    "https://withgoogle.com",
    "Quick, Draw!",
    "Generic",
    "qd.png"
)
makeLink(
    "https://openguessr.com",
    "GeoGuessR/OpenGuessR",
    "Trending",
    "guessr.png"
)
makeLink(
    "https://agar.io",
    "Agar.io",
    ".io",
    "agario.png"
)
makeLink(
    "https://stumbleguys.com",
    "Stumble Guys",
    "Trending",
    "stumble.png"
)
makeLink(
    "https://geometrylitegame.io",
    "Geometry Lite",
    "Generic",
    "lite.png"
)
makeLink(
    "https://html5games.com",
    "HTML5Games",
    "Generic",
    "html5games.png"
)
makeLink(
    "https://poki.com",
    "Poki Games",
    "Generic",
    "poki.png"
)
makeLink(
    "https://scratch.mit.edu",
    "Scratch",
    "Trending",
    "scratch.png"
)
makeLink(
    "https://crazygames.com",
    "CrazyGames",
    "Trending",
    "crazygames.png"
)

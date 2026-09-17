const cnc = document.getElementById("tmpcmp")

function makeVideo(path, title, creator) {
    cnc.insertAdjacentHTML('afterbegin', 
    `
<div class="video-container">
    <div class="vinteo">
<video width="426" height="240" controls style="border: 5px solid #ffffff;">
    <source src="${path}" type="video/mp4">
    Your browser does not support the video tag.
</video>
</div>
  <div class="ntix">
    <h3>${title}</h3>
    <p>από ${creator}</p>
  </div>
</div>
</div>
    ` 
    )
}

makeVideo(
    "0916.mp4",
    "egw me ton stef core",
    "aroukas :)"
)

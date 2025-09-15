const video = document.getElementById("mainVideo");

// Klik video untuk play/pause
video.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
});

// Tombol like
document.querySelector(".like").addEventListener("click", e => {
  const count = e.currentTarget.querySelector(".count");
  let num = parseInt(count.textContent.replace(/\D/g,"")) || 0;
  num++;
  count.textContent = num;
});

const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "resources/cat-heart.gif",
  "resources/rusure.gif",
  "resources/3shocked-1.gif",
  "resources/4.crying.gif",
  "resources/5.crying.gif",
  "resources/idc.gif"
];

gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});


no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "resources/rusure.gif";
    text.innerHTML = "Hãy suy nghĩ lại iiii?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "resources/3shocked-1.gif";
    text.innerHTML = "Nút Yes bên trái cơ mà?🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "resources/4.crying.gif";
    text.innerHTML = "Tôi khóc bây giờ đó";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "resources/5.crying.gif";
    text.innerHTML = "Làm ơn đi mà";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "resources/idc.gif";
  text.innerHTML = "Anh biết mà, yêu em vãi ò 😘";
  yes.innerHTML = '<a href="https://www.facebook.com/minhtruong.nguyen.79462/">Message me</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
});

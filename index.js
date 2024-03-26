const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const searchBtn = document.querySelector(`.searchBtn`);
const word = document.querySelector(`.value`);
const givenWord = document.querySelector(`.givenWord`);
const display = document.querySelector(`.display`);
const audioBtn = document.querySelector(`.voiceBtn`);

let audio;
function playaudio() {
  console.log("data");
  audio.play();
}

searchBtn.addEventListener("click", async () => {
  audioBtn.removeEventListener("click", playaudio);
  let getData = await fetch(`${api}${word.value}`);
  let data = await getData.json();
  givenWord.innerText = word.value;
  if (data.message !== undefined) {
    display.innerText = data.message;
  } else {
    display.innerText = data[0].meanings[0].definitions[0].definition;
    audio = new Audio(data[0].phonetics[0].audio);
    audioBtn.addEventListener("click", playaudio);
  }
});

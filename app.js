const btn = document.getElementsByClassName("btn")[0]; // Select the first element with the "btn" class
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const randomNumber3 = getRandomNumber();

  console.log(randomNumber1);

  document.body.style.backgroundColor = `rgba(${randomNumber1},${randomNumber2},${randomNumber3})`;
  color.textContent = `rgba(${randomNumber1},${randomNumber2},${randomNumber3})`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256); // Random number between 0 and 255
}

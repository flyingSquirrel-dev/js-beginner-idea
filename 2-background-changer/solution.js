/*
 * Background changer: The idea of this project includes when a button is clicked the background changes. It very fun to do and takes about 5mins to code.
 *
 * JS concept you will get to practice
 * - Styling css elements with JS
 * - Arrays
 * - DOM manipulation
 * */

(function () {
  const button = document.getElementById("button");

  function getRandomRgbNumber() {
    return Math.floor(Math.random() * 255);
  }

  button.addEventListener("click", function () {
    const red = getRandomRgbNumber();
    const green = getRandomRgbNumber();
    const blue = getRandomRgbNumber();

    document.body.style.background = `rgb(${red},${green},${blue})`;
  });
})();

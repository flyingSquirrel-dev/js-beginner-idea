/*
 * 1.Random password generator: Build a web app with Javascript that generates random passwords when the button is clicked on.
 *
 * JS concept you will get to practice
 * - for loop
 * - JS functions
 * - Math.floor and Math.random methods
 * - Variables
 * - DOM manipulation
 * */

const randomStringStore = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function getRandomPassword(digit = 16) {
  const lengthOfStore = randomStringStore.length;
  let randomPassword = "";

  for (let i = 0; i < digit; ++i) {
    randomPassword +=
      randomStringStore[Math.floor(Math.random() * lengthOfStore)];
  }

  return randomPassword;
}

function showRandomPassword() {
  const passwordDisplayArea = document.getElementById("random-password");
  const randomPassword = getRandomPassword(16);

  passwordDisplayArea.innerText = randomPassword;
}

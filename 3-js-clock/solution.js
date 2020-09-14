(function () {
  const NUMBER_OF_START = 9;
  const BASIC_ANGLE = 6;
  const ANGLE_OF_AN_HOUR = 30;
  const HOUR = "HOUR";
  const MIN = "MIN";
  const SEC = "SEC";

  const currentTimeElem = document.querySelector(".current-time");
  const hourTicElem = document.querySelector(".hour-tic");
  const minTicElem = document.querySelector(".min-tic");
  const secTicElem = document.querySelector(".sec-tic");

  function convertToPadString({ type, value, digit }) {
    if (type === HOUR) {
      const hour = value > 12 ? value - 12 : value;
      return hour.toString().padStart(digit, "0");
    }
    return value.toString().padStart(digit, "0");
  }

  function getHHMMSS(currentTime) {
    return {
      hour: currentTime.getHours(),
      min: currentTime.getMinutes(),
      sec: currentTime.getSeconds(),
    };
  }

  function setTimeText(currentTime) {
    const { hour, min, sec } = getHHMMSS(currentTime);

    const currentHour = convertToPadString({
      type: HOUR,
      value: hour,
      digit: 2,
    });
    const currentMin = convertToPadString({ type: MIN, value: min, digit: 2 });
    const currentSec = convertToPadString({ type: SEC, value: sec, digit: 2 });
    const currentUnit = hour >= 12 ? "PM" : "AM"; // AM or PM

    currentTimeElem.innerText = `${currentHour}:${currentMin}:${currentSec} ${currentUnit}`;
  }

  function setTimeTics(currentTime) {
    const { hour, min, sec } = getHHMMSS(currentTime);

    // set hour
    hourTicElem.style.transform = `rotate(${
      (hour - NUMBER_OF_START) * ANGLE_OF_AN_HOUR +
      (min / 60) * ANGLE_OF_AN_HOUR
    }deg)`;

    // set min
    minTicElem.style.transform = `rotate(${90 + min * BASIC_ANGLE}deg)`;

    // set sec
    secTicElem.style.transform = `rotate(${90 + sec * BASIC_ANGLE}deg)`;
  }

  setInterval(() => {
    const currentTime = new Date();

    setTimeText(currentTime);
    setTimeTics(currentTime);
  }, 1000);
})();

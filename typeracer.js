// Using this script you can make 100-200 WPM

const input = document.getElementsByClassName('txtInput')[0];

let count = 0;

const interval = setInterval(() => {
  const panel = document.getElementsByClassName('inputPanel');

  const currentLetter =
    panel[0].children[0].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[0].children[0].children?.[count]
      ?.innerHTML;

  input.focus();
  if (currentLetter) {
    input.value += currentLetter;
  } else {
    clearInterval(interval);
  }
  ++count;
}, 2000);

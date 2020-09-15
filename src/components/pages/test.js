let front = "";
let back = "";
let target = 0;
let splitString = "";
const getDoubleString = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (i !== s.length - 1) {
      front += s[i];
      back += s[s.length - i - 1];
      splitString = back.split("");
      splitString = splitString.reverse();
      splitString = splitString.join("");
      if (front === splitString && i !== s.length - 1) {
        target = s.length - i - 1;
      }
    }
  }
  let res = s.substr(s.length - target, target);
  if (res) {
    let sum = s + res;
    console.log(sum);
  } else {
    let sum = s + s;
    console.log(sum);
  }
};

getDoubleString("crie");

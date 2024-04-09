const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

function telephoneCheck(str) {
  let regex = /(^\d{3}-\d{3}-\d{4}$)|(^1\s\d{3}-\d{3}-\d{4}$)|(^1\s\(\d{3}\)\s\d{3}-\d{4}$)|(^\d{10}$)|(^\(\d{3}\)\d{3}-\d{4}$)|(^1\s\d{3}\s\d{3}\s\d{4})|(^1\(\d{3}\)\d{3}-\d{4}$)/g;
  return regex.test(str);
}

function clear() {
  userInput.value = "";
  result.innerText = "";
}

clearButton.addEventListener("click", clear);

checkButton.addEventListener("click", () => {
  const input = userInput.value;
  clear();
  if (input === "") {
    alert("Please provide a phone number");
  } else {
    const valid = telephoneCheck(input);
    if (valid) {
      result.innerText = `Valid US number: ${input}`;
    } else {
      result.innerText = `Invalid US number: ${input}`;
    }
  }
});
Close
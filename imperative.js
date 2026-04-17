let value = 0;

document.getElementById("inc").addEventListener("click", () => {
  value = value + 1;
  document.getElementById("value").textContent = value;
});

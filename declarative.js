let state = {
  value: 0
};

function render(state) {
  document.getElementById("app").innerHTML = `
    <span>${state.value}</span>
  `;
}

document.getElementById("inc").addEventListener("click", () => {
  state.value++;
  render(state);
});

// rendu initial
render(state);


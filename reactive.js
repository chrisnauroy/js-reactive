const render = (state) => {
  document.getElementById("app").innerHTML = `
    <span>${state.value}</span>
  `;
};

const state = new Proxy(
  { value: 0 },
  {
    set(target, key, value) {
      target[key] = value;
      render(target); // réaction automatique
      return true;
    }
  }
);

document.getElementById("inc").addEventListener("click", () => {
  state.value++;
});

// rendu initial
render(state);

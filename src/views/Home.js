//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';
    return viewEl;
  }

linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';
    return viewEl;
}

export const Home = (props) => {
    const el = document.createElement('div');
    el.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
    console.log(props.id);
    return el;
}
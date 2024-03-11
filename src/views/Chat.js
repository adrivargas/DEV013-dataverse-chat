import { header } from '../components/header.js';
export function Chat() {

  const chatMain = document.createElement('div');
  chatMain.setAttribute("class", "chatMain");

    const chatTitle = document.createElement('h2');
    chatTitle.setAttribute("class", "chatTitle");
    chatTitle.textContent = "Bienvenido";

    const messageArea = document.createElement('div');
    messageArea.setAttribute("class", "messageArea");

    const robot = document.createElement('div');
    robot.setAttribute("class", "robot");

    const bot = document.createElement('div');
    bot.setAttribute("class", "bot");

    const botName = document.createElement('h3');
    botName.setAttribute("class", "botName");
    botName.textContent = "Online";

  const input = document.createElement('div');
  input.setAttribute("class", "input");

    const messageInput = createElement ('input');



    //chat.textContent = 'This is the About page.';
    //viewEl.appendChild(header());
    //return viewEl;` `
}
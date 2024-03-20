import dataset from "../data/dataset.js";
import { header } from "../components/header.js";


export const chatIndividual = () =>{
const view = document.createElement("div");
const mainPage = document.createElement("article");
mainPage.className = "mainchat"
const secondaryHeader = document.createElement("div")
secondaryHeader.className = "secondaryheader"
mainPage.appendChild(secondaryHeader);


const onlineMovie= document.createElement("p");
onlineMovie.className = "online"
secondaryHeader.appendChild(onlineMovie)
onlineMovie.textContent = "Online"

// const iconMovie = document.createElement("i");
// iconMovie.id = "icono";
// iconMovie.textContent= "Adriana"
// secondaryHeader.appendChild(iconMovie);

const burbujaChat = document.createElement("div")
burbujaChat.className = "burbujachat"
burbujaChat.textContent= "probando"


const burbujaMovie = document.createElement("div")
burbujaMovie.className = "burbujamovie"
mainPage.appendChild(burbujaMovie);
mainPage.appendChild(burbujaChat);


const inputUser = document.createElement("div")
inputUser.className = "inputuser"

const inputmessage = document.createElement("textarea")

inputUser.appendChild(inputmessage);
mainPage.appendChild(inputUser);

const sendButton = document.createElement("button");

// mainPage.setAttribute("class", "chatContainer");
// inputMain.setAttribute("class", "inputmessage");
// inputMain.setAttribute("placeholder", "Escriba aqui...");
// inputMain.setAttribute("type", "text");
// inputMain.id = "chatpanel"
// sendButton.setAttribute("class", "sendmessage")
// sendButton.id = "sendbutton"
// sendButton.textContent = "Send";


view.appendChild(header());
view.appendChild(mainPage);
view.appendChild(sendButton);

return view;

};
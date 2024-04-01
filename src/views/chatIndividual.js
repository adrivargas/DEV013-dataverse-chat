import dataset from "../data/dataset.js";
import { header } from "../components/header.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js"
//import { setApiKey } from "../lib/apiKey.js";
//import { getApiKey } from "../lib/apiKey.js";


export const chatIndividual = (movie) => {
  console.log(movie);
  const view = document.createElement("div");
  const mainPage = document.createElement("article");
  mainPage.className = "mainchat"
  const secondaryHeader = document.createElement("div")
  secondaryHeader.className = "secondaryheader"
  mainPage.appendChild(secondaryHeader);
  


  const onlineMovie = document.createElement("p");
  onlineMovie.className = "online"
  secondaryHeader.appendChild(onlineMovie)
  onlineMovie.textContent = "Online"

  // const iconMovie = document.createElement("i");
  // iconMovie.id = "icono";
  // iconMovie.textContent= "Adriana"
  // secondaryHeader.appendChild(iconMovie);

  // const contenedorDeBurbujas = document.createElement("div")// un contenedor para los dos chats, de venida y de ida
  // contenedorDeBurbujas.appendChild(burbujaChat);
  // contenedorDeBurbujas.appendChild(burbujaMovie);

  const burbujaChat = document.createElement("div") //donde el usuario escribe
  burbujaChat.className = "burbujachat"
  burbujaChat.textContent = ""


  const burbujaMovie = document.createElement("div")// donde la pelicula escribe
  burbujaMovie.className = "burbujamovie"
  // mainPage.appendChild(contenedorDeBurbujas); // ahora si todos los chats estan dentro de un contenedor y este del main page
  mainPage.appendChild(burbujaMovie);
  mainPage.appendChild(burbujaChat);


  //const inputUser = document.createElement("div")
  //inputUser.className = "inputuser"

  const inputmessage = document.createElement("textarea") // la caja donde escribimos los mensajes

  // inputUser.appendChild(inputmessage);
  // mainPage.appendChild(inputUser);
  mainPage.appendChild(inputmessage);
  const sendButton = document.createElement("button");
  sendButton.className = "sendbutton"
  sendButton.textContent = "Enviar"
  mainPage.appendChild(sendButton);



  sendButton.addEventListener("click", () => {
    const msg = inputmessage.value;
    communicateWithOpenAI(movie.name, msg) 
      .then(response => {
        console.log(view.innerHTML =` ${response}`)

      })
      .catch(error => {
        console.log(`"Error", ${error}`);
      })

  }),
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
}




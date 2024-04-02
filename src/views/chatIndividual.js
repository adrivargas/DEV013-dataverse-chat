import data from '../data/dataset.js';
import { header } from "../components/header.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js"
import { setApiKey } from "../lib/apiKey.js";
//import { getApiKey } from "../lib/apiKey.js";


export const chatIndividual = (movie) => {
 console.log(movie)
  //Creo todas las constantes a usar//
  const view = document.createElement("div");
  const mainPage = document.createElement("article");
  const secondaryHeader = document.createElement("div")
  const onlineMovie = document.createElement("p");
  const contenedorDeBurbujas = document.createElement("div")
  const burbujaChat = document.createElement("div") //donde el usuario escribe
  const burbujaMovie = document.createElement("div")
  const inputmessage = document.createElement("textarea")
  const sendButton = document.createElement("button");

  // Añado mis clases
  mainPage.className = "mainchat"
  secondaryHeader.className = "secondaryheader"
  onlineMovie.className = "online"
  burbujaChat.className = "burbujachat"
  burbujaMovie.className = "burbujamovie"
  sendButton.className = "sendbutton"
  inputmessage.id = "movieMsg";
  // Añado mis append y appendChild
  secondaryHeader.appendChild(onlineMovie);
  mainPage.append(secondaryHeader, burbujaMovie, burbujaChat, inputmessage, sendButton);
  view.append(header(), mainPage);

  //Mis textContent
  onlineMovie.textContent = "Online"
  sendButton.textContent = "Enviar"

  //--------------Listener---------------//

  sendButton.addEventListener("click", () => {
    const userMessage = inputmessage.value; // Obtener el mensaje del usuario
    addChatBubble(burbujaChat, "user", userMessage); // Agregar la burbuja del usuario al contenedor de burbujas
    communicateWithOpenAI(movie, userMessage)
      .then(response=>{
        console.log(response)
        burbujaMovie.innerHTML = response.choices[0].message.content
      })
      .catch(error=>{
        console.log(error)
      })
    // communicateWithOpenAI(movie.name, userMessage)
    //   console.log (movie.name)
      

    // // Limpiar el área de texto después de enviar el mensaje
    // inputmessage.value = "";
  });

  function addChatBubble(container, role, message) {
    const bubble = document.createElement("div");
    bubble.className = `bubble ${role}`;
    bubble.textContent = message;
    container.appendChild(bubble);
  }

  

  return view;

};
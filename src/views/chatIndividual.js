import data from '../data/dataset.js';
import { header } from "../components/header.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js"
import { setApiKey } from "../lib/apiKey.js";
//import { getApiKey } from "../lib/apiKey.js";


export const chatIndividual = (movie) => {
  console.log(movie);
  const view = document.createElement("div");
  const mainPage = document.createElement("article");
  mainPage.className = "mainchat"
  const secondaryHeader = document.createElement("div")
  secondaryHeader.className = "secondaryheader"
  mainPage.appendChild(secondaryHeader);
  
  const burbujaChat = document.createElement("div") //donde el usuario escribe
  burbujaChat.className = "burbujachat"
  burbujaChat.textContent = ""


  const burbujaMovie = document.createElement("div")// donde la pelicula escribe
  burbujaMovie.className = "burbujamovie"
  // mainPage.appendChild(contenedorDeBurbujas); // ahora si todos los chats estan dentro de un contenedor y este del main page
  mainPage.appendChild(burbujaMovie);
  mainPage.appendChild(burbujaChat);

  const inputmessage = document.createElement("textarea"); // la caja donde escribimos los mensajes
  inputmessage.id = "movieMsg";
  mainPage.appendChild(inputmessage);
  const sendButton = document.createElement("button");
  sendButton.className = "sendbutton"
  sendButton.textContent = "Enviar"
  mainPage.appendChild(sendButton);



  // sendButton.addEventListener("click", () => {
  //   const msg = inputmessage.value;
  //   const apiKey = getApiKey();
  // });

  
  const selectedMovieInfo = data.find((movies) => movies.id === movie);
  const messageMovie = mainPage.querySelector('#movieMsg');
  console.log(selectedMovieInfo);

  communicateWithOpenAI(selectedMovieInfo, messageMovie.value) 
    .then((response) => response.json())
    .then((data) =>{

      //view.data.choices[0].message.content
      console.log(data.choices[0].message.content)

    })
    .catch(error => {
      console.log (error)
    });

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



// Por revisar 

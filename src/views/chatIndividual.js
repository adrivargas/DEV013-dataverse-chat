import data from '../data/dataset.js';
import { header } from "../components/header.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js"
import { navigateTo } from '../router.js';
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
    const btnHome = document.createElement('button');
    const containerbubble = document.createElement('section')

    // Añado mis clases
    mainPage.className = "mainchat"
    secondaryHeader.className = "secondaryheader"
    onlineMovie.className = "online"
    burbujaChat.className = "burbujachat"
    burbujaMovie.className = "burbujamovie"
    sendButton.className = "sendbutton"
    inputmessage.id = "movieMsg";
    btnHome.className = "btnHome";
 
    // Añado mis append y appendChild
    secondaryHeader.appendChild(onlineMovie);
    mainPage.appendChild(secondaryHeader);
    mainPage.appendChild(containerbubble)
    mainPage.append(inputmessage, sendButton);
    view.append(header(), btnHome,mainPage);
    //Mis textContent
    onlineMovie.textContent = "Online"
    sendButton.textContent = "Enviar"

    //--------------Listener---------------//
    sendButton.addEventListener("click", () => {
        const userMessage = inputmessage.value; // Obtener el mensaje del usuario
        const resultChatUser = addChatBubble("user", userMessage); // Agregar la burbuja del usuario al contenedor de burbujas
        containerbubble.appendChild(resultChatUser)
        scrollChatToBottom(containerbubble)
        communicateWithOpenAI(movie, userMessage)
            .then(response => {
                // Procesar la respuesta de la IA
                const aiResponse = response.choices[0].message.content; // Supongamos que la respuesta de la IA está en el campo 'data'
                const resultChatIA = addChatBubble("ai", aiResponse); // Agregar la burbuja de chat con la respuesta de la IA
                containerbubble.appendChild(resultChatIA)
                scrollChatToBottom(containerbubble)
            })
            .catch(error => {
                console.error("Error al comunicarse con OpenAI:", error);
                // Manejar el error de manera adecuada (por ejemplo, mostrar un mensaje de error al usuario)
            });
        // Limpiar el área de texto después de enviar el mensaje
        inputmessage.value = "";
    });

    btnHome.addEventListener('click', () => navigateTo("/home", {}));
    //--------Funciones---------//

    function addChatBubble(role, message) {
        // console.log(container, role, message);
        const bubble = document.createElement("div");
        bubble.className = `bubble ${role}`;
        bubble.textContent = message;
        bubble.style = `background-color: white;
        width: 100%;
        height: 50%;
        margin-top: 50px;
        border-radius: 15px 15px 15px 15px;`
        return bubble;
    }

    function scrollChatToBottom(container) {
        container.scrollTop = container.scrollHeight;
    }
    return view;
    // Por revisar
};


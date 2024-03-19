export const chatIndividual = () =>{
const mainPage = document.createElement("article");
const inputMain = document.createElement("input");
const sendButton = document.createElement("button");

mainPage.setAttribute("class", "chatContainer");
inputMain.setAttribute("class", "inputmessage");
inputMain.setAttribute("placeholder", "Escriba aqui...");
inputMain.setAttribute("type", "text");
inputMain.id = "chatpanel"
sendButton.setAttribute("class", "sendmessage")
sendButton.id = "sendbutton"
sendButton.textContent = "Send";



mainPage.appendChild(inputMain);
mainPage.appendChild(sendButton);

return mainPage;

};
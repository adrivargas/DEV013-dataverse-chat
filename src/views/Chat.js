import { header } from '../components/header.js';


export function Chat() {
  const chatView = document.createElement('div');
  const chatWindow =document.createComment('div');
  chatWindow.className = "chatwindow"
  
  const chatBox = document.createElement('div');
  chatBox.innerHTML = `
   <div class="chatbox">
    
    <h2 class="titleChat">Online</h2>
    
    <ul class="chatbox">
      <li class="chatReceived>
      <img = "chaticon" class="chaticon" src="./data//dataset/imageURL" alt="chaticon"/>
        <p> Hola! en que te puedo ayudar? </p>
      </li>
      <li class="chatSent>
        <p class="sending">Hola!</p>
      </li>
    </ul>
    <div>
      <textarea placeholder="Escriba aqui..."></textarea>
      <span id="sendbutton" class="iconchat"></span>
    </div>
   </div>`;

   chatView.appendChild(header());
   chatView.appendChild(chatWindow);
   chatView.appendChild(chatBox);
  

return chatView;
}



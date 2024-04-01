// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

const receiveApi = getApiKey();
export const communicateWithOpenAI = async(movie, input) => {
  //Aquí es donde debes implementar la petición con fetch o axios//
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + receiveApi,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tu eres: ${movie}, responde dando informacion sobre ti`,
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  });
  return response;
};
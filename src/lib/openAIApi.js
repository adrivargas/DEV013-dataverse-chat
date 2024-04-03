// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';
const receiveApi = getApiKey();
export const communicateWithOpenAI = (movie, input) => {
  console.log(movie.props.name);
  
  //  //Aquí es donde debes implementar la petición con fetch o axios
  const response =  fetch('https://api.openai.com/v1/chat/completions', {
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
          content: `Tu eres: ${movie.props.name}, responde dando informacion sobre ti`,
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  })
    .then((response) => {
      return response.json()
    })
  //   .then((data) => {
  //     console.log(data.choices[0].message.content)
  //     return data;
  //   })
    .catch(error => {
      console.error("Error al comunicarse con OpenAI:", error);
      // Manejar el error de manera adecuada (por ejemplo, mostrar un mensaje de error al usuario)
    });
  return response;
};
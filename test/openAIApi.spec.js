// Importa la función que deseas probar
import { communicateWithOpenAI } from './ruta/de/tu/archivo.js';

// Mock de la función getApiKey para evitar llamadas reales a la API en tus pruebas
jest.mock('./ruta/de/tu/apiKey.js', () => ({
  getApiKey: jest.fn(() => 'mockedApiKey')
}));

describe('communicateWithOpenAI', () => {
  it('debería llamar a la API de OpenAI con los parámetros correctos', async () => {
    // Definir los datos de prueba
    const movie = { props: { name: 'Nombre de la película' } };
    const input = 'Mensaje de prueba';

    // Llamar a la función que deseas probar
    await communicateWithOpenAI(movie, input);

    // Verificar si fetch fue llamado con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith('https://api.openai.com/v1/chat/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer mockedApiKey", // Usando el API key mockeado
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
    });
  });

  // Aquí podrías agregar más tests para otros escenarios, como manejo de errores, etc.
});

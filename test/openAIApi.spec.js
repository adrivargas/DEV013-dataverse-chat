import { communicateWithOpenAI } from '../src/lib/openAIApi';

describe("communicateWithOpenAI", () => {

  const mockRespuesta = { text: "Hola, como estas?" };

  // eslint-disable-next-line no-undef
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockRespuesta),
  });

  test("responde de forma correcta", async () => {
    const respuesta = await communicateWithOpenAI({ props: { name: "Titulo" } }, "Hola");
    
    expect(respuesta).toEqual(mockRespuesta);
  });

  test("se comunica de forma correcta con la API", async () => {
    const input = "Hola";
    const movie = { name: "Titulo" };

    await communicateWithOpenAI(movie, input);

    expect(fetch).toHaveBeenCalledWith('https://api.openai.com/v1/chat/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer mockedApiKey", 
      }, 
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Tu eres: ${movie.props.JSONname}, responde dando informacion sobre ti`,
          },
          {
            role: "user",
            content: input,
          },
        ],
      }),
    });
  });

  test("error al comunicarse con la API", async()=> {
    const mockRespuesta = { text: "Hola, como estas?" };
    const respuesta = await communicateWithOpenAI({ props: { name: "Titulo" } }, "Hola");
    expect(respuesta).toEqual(mockRespuesta);

    if (!respuesta) {
      return ("Error al comunicarse con la API")
    }
  });

})


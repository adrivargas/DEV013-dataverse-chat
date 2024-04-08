import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
describe('getApiKey', () => {
  test('deberia devolver el valor de la API Key', () => {
   
    const apiKey = getApiKey();
    //localStorage.setItem("apiKey", apiKey)
    expect(getApiKey()).toBe(apiKey);
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const apiKey = "mockKey123"
    const result = setApiKey(apiKey)
    expect(localStorage['apiKey']).toEqual(apiKey);
    expect(result).toBeUndefined();
  });
});
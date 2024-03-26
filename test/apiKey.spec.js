import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
describe('getApiKey', () => {
  test('should return null if apiKey is not set', () => {

    localStorage = {};
    const apiKey = getApiKey();
    expect(apiKey).toBeNull();
  });

  test('should return the apiKey if it is set', () => {
    const apiKeyValue = 'test-api-key';
    localStorage['apiKey'] = apiKeyValue;
    const apiKey = getApiKey();
    expect(apiKey).toBe(apiKeyValue);
  });
});



describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const apiKeyValue = 'test-api-key';
    setApiKey(apiKeyValue);
    expect(localStorage['apiKey']).toBe(apiKeyValue);
  });
});
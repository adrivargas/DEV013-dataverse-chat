export const getApiKey = () => {
  const  getApi= localStorage.getItem("apiKey");
  console.log(getApi)
  return getApi;
};

export const setApiKey = (key) => {
  const setApi = localStorage.setItem("apiKey", key);
  console.log(setApi)
  return setApi;
};  

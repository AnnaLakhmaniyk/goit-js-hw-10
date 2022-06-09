const BASE_URL = 'https://restcountries.com/v3.1';
export const feachCountry = name => {
  return fetch(
    `${BASE_URL}/name/${name}?fields=name,population,flags,languages,capital`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

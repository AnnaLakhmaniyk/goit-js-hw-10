export const renderOneMarkup = (country, container) => {
  function lengKey(params) {
    return Object.values(params).join(' ');
  }
  const markup = country
    .map(
      ({
        flags,
        name,
        capital,
        population,
        languages,
      }) => /*html */ `<div class="wrape"><img src="${flags.svg}" alt="${
        name.official
      }" width="60" height="auto" >
      <p class="textAll">${name.official}</p></div>
      <ul class="country-list">
        <li><span class="item-content">Capital:</span> ${capital}</li>
        <li><span class="item-content">Population:</span> ${population}</li>
        <li><span class="item-content">Languages:</span> ${lengKey(
          languages
        )}</li>
      </ul>`
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
};

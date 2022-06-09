export const renderMarkup = (countries, container) => {
  const markup = countries
    .map(
      ({ flags, name }) => /*html*/ `<li class='item'>
      <img  src="${flags.svg}" width="80" height="auto" alt="${name.official}" >
      <p class='textAll'>${name.official}</p>
    </li>
  `
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
};

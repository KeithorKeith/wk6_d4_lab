document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('input');
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#title');
  textInput.addEventListener('input', handleInput);

  const select = document.querySelector('#category')
  select.addEventListener('change', handleSelect);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleButtonClick = function () {
console.log('Button clickin');
}

const handleInput = function () {
console.log('Inputtin!');
}

const handleSelect = function () {
  console.log('Selectin!');
}

const handleFormSubmit = function (event) {
  event.preventDefault()
  console.log('submittin!');
  
}
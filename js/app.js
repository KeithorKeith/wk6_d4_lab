document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('input');
  button.addEventListener('click', handleButtonClick);

  const textInput1 = document.querySelector('#title');
  textInput1.addEventListener('input', handleInput);

  const textInput2 = document.querySelector('#author');
  textInput2.addEventListener('input', handleInput)

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
  const textInput1 = document.querySelector('#title').value;
  const textInput2 = document.querySelector('#author').value;
  const select = document.querySelector('#category').value;
  event.preventDefault()

  console.log(textInput1);
  console.log(textInput2);
  console.log(select);

  const reading_list = document.querySelector('#reading-list');
  const listItem = document.createElement('li')
  listItem.textContent = `${textInput1} - ${textInput2}... ${select}`;
  reading_list.appendChild(listItem)

  // this.reset();
}

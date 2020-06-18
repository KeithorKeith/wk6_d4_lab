document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.querySelector('input#save');
  saveButton.addEventListener('click', handleSaveButtonClick);

  const textInput1 = document.querySelector('#title');
  textInput1.addEventListener('input', handleInput);

  const textInput2 = document.querySelector('#author');
  textInput2.addEventListener('input', handleInput)

  const select = document.querySelector('#category')
  select.addEventListener('change', handleSelect);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('input#delete');
  deleteButton.addEventListener('click', handleDeleteButtonClick);
});

const handleSaveButtonClick = function () {
  console.log('Button clickin');
}

const handleDeleteButtonClick = function () {
  const reading_list = document.querySelector('#reading-list');
  const readingListInner = reading_list.innerHTML = ""
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
  const listItem = document.createElement('div')
  listItem.classList.add('purple');
  const my_h1 = document.createElement('h1')
  my_h1.textContent = textInput1;
  const my_h2 = document.createElement('h2')
  my_h2.textContent = textInput2;
  const my_h3 = document.createElement('h3')
  my_h3.textContent = select;
  //  listItem.textContent = `${textInput1} - ${textInput2}... ${select}`;
  listItem.appendChild(my_h1);
  listItem.appendChild(my_h2);
  listItem.appendChild(my_h3);
  reading_list.appendChild(listItem);
//  reading_list.appendChild(document.createElement('br'));

  this.reset();
}

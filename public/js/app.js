console.log('Client side JS file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('messageOne');
const messageTwo = document.getElementById('messageTwo');

weatherForm.addEventListener('click', (event) => {
  event.preventDefault();
  const location = search.value;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) messageOne.textContent = data.error;
      else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});

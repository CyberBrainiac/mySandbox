let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

page.classList.add('dark-theme');
themeButton.onclick = function () {
  page.classList.toggle('dark-theme');
  page.classList.toggle('light-theme');
}

console.log("this is my sandbox");
////////////////////////////////////////////////////////////////////////SANDBOX/////////////////////////////////////////////////////////////////////////////////////////////////////

fetch('http://example.com/movies.json', {
  method: 'GET',
  credentials: 'include',
  mode: 'cors',
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
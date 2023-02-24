"use strict";
////////////////////////////////////////////////////////////////////////SANDBOX/////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch('https://example.com', {
//   method: 'GET',
//   credentials: 'include',
//   mode: 'cors',
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


async function getData() {
  const response = await fetch('https://example.com/data');
  const data = await response.json;
  return data;
}

getData().then(
  (res) => console.log(res)
)
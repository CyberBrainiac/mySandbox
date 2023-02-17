"use strict";

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert);

//http://example.com/movies.json
// fetch('https://coinmarketcap.com/', {
//   method: 'GET',
//   credentials: 'include',
//   mode: 'cors',
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch('file:///C:/myDataArs/myProject/TEST/htmls/index-test.html', 
{
    method: 'GET',
    mode: 'no-cors',
})
.then(response => response.text())
.then(data => { console.log(data); });

  //https://coinmarketcap.com/
  //узнать почему браузер добавляет Origin: null
  //как со страницы запущенной на локальном компьютере получить доступ к данным сервера

// // Пример отправки POST запроса:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit

//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });


// try {
//   await fetch('http://example.com');
// } catch(err) {
//   alert(err); // Failed to fetch
// }



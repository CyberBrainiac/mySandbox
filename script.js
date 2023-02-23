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



async function showAvatar() {

  // запрашиваем JSON с данными пользователя
  // let response = await fetch('/article/promise-chaining/user.json');
  // let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/PoziTronAr`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

// showAvatar();

async function loadJson(url) {
  const response = await fetch(url)
  
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

// loadJson('no-such-user.json').catch(console.log); // Error: 404


let exempleHTTPError;
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      console.log(response);
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        exempleHTTPError = err;
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
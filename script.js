"use strict";
////////////////////////////////////////////////////////////////////////SANDBOX/////////////////////////////////////////////////////////////////////////////////////////////////////

class ES6UlClass extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <ul>
          <li>Now this is</li>
          <li>Playground</li>
          <li>for Me and React</li>
        </ul>
      </div>
    );
  }
}

function Button (props) {
  return (
    <div class='mainDiv'>
      <button type="submit">{props.label}</button>
      <div>My div</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Button label="Save" />
    <ES6UlClass />
  </React.StrictMode>, document.getElementById('root')
)

keywordSite2();

function keywordSite() {
  // const urls = [
  //   "https://techwibe.com",
  //   "https://programminginsider.com",
  //   "https://zephyrnet.com",
  //   "https://solutionhow.com",
  //   "https://techcults.com",
  //   "https://hackread.com",
  //   "https://marketbusinessnews.com",
  //   "https://digitalconnectmag.com",
  //   "https://techstrange.com",
  //   "https://rswebsols.com",
  //   "https://macobserver.com",
  //   "https://cointiply.com",
  //   "https://lowendmac.com",
  //   "https://computertechreviews.com",
  //   "https://codecondo.com",
  //   "https://techdee.com"
  // ];


  const urls = [
    'https://www.google.si/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj6hrrjpsz9AhVdAhAIHSWsC08QFnoECAgQAQ&url=https%3A%2F%2Fmagazines2day.com%2Fhighly-accurate-data-annotation-data-labeling-services-by-experts-here-in-the-uk%2F&usg=AOvVaw2quje7OZl7E-B9kKv34Fg7',
    "https://techwibe.com",
  ]

  const keywords = ["data labeling", "data annotation"];

  for (const url of urls) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        for (const keyword of keywords) {
          if (html.includes(keyword)) {
            console.log(`Найдено совпадение "${keyword}" на странице ${url}`);
          }
        }
      })
      .catch(error => console.log(`Ошибка при загрузке страницы ${url}: ${error}`));
  }
}


function keywordSite2() {
  
//   const sites = [
//   'techwibe.com',
//   'programminginsider.com',
//   'zephyrnet.com',
//   'solutionhow.com',
//   'techcults.com',
//   'hackread.com',
//   'marketbusinessnews.com',
//   'digitalconnectmag.com',
//   'techstrange.com',
//   'rswebsols.com',
//   'macobserver.com',
//   'cointiply.com',
//   'lowendmac.com',
//   'computertechreviews.com',
//   'codecondo.com',
//   'techdee.com'
//   ];
  
 const sites = [
  'https://www.google.si/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj6hrrjpsz9AhVdAhAIHSWsC08QFnoECAgQAQ&url=https%3A%2F%2Fmagazines2day.com%2Fhighly-accurate-data-annotation-data-labeling-services-by-experts-here-in-the-uk%2F&usg=AOvVaw2quje7OZl7E-B9kKv34Fg7',
  "https://techwibe.com",
 ]

const searchTerms = ['data labeling', 'data annotation'];

sites.forEach(site => {
  searchTerms.forEach(term => {
    fetch(`https://cors-anywhere.herokuapp.com/https://${site}`)
      .then(response => response.text())
      .then(data => {
        if (data.includes(term)) {
          console.log(`${term} found on ${site}`);
        }
      })
      .catch(error => console.error(error));
  });
});

}

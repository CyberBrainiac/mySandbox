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


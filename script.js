"use strict";
////////////////////////////////////////////////////////////////////////SANDBOX/////////////////////////////////////////////////////////////////////////////////////////////////////

// const root = ReactDOM.createRoot(document.getElementById('root'));

function Button (props) {
  // Возвращает DOM элемент. Например:
  return (
    <div class='mainDiv'>
      <button type="submit">{props.label}</button>
      <div>My div</div>
    </div>
);
}
// Отрисовываем компонент Button в браузере
ReactDOM.render(<Button label="Save" />, document.getElementById('root'))
// root.render(<Button label="Save" />);

// ReactDOM.render(<Button />, document.getElementById('root'));


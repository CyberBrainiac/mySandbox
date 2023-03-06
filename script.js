"use strict";
////////////////////////////////////////////////////////////////////////SANDBOX/////////////////////////////////////////////////////////////////////////////////////////////////////

function Button (props) {
  // Возвращает DOM элемент. Например:
  return <button type="submit">{props.label}</button>;
}
// Отрисовываем компонент Button в браузере
ReactDOM.render(<Button label="Save" />, document.getElementById('root'))

// ReactDOM.render(<Button />, document.getElementById('root'));

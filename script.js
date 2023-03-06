"use strict";
////////////////////////////////////////////////////////////////////////SANDBOX/////////////////////////////////////////////////////////////////////////////////////////////////////

// const root = ReactDOM.createRoot(document.getElementById('root'));

function Button (props) {
  // Возвращает DOM элемент. Например:
  return <button type="submit">{props.label}</button>;
}
// Отрисовываем компонент Button в браузере
ReactDOM.render(<Button label="Save" />, document.getElementById('root'))
// root.render(<Button label="Save" />);

// ReactDOM.render(<Button />, document.getElementById('root'));

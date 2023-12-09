document.addEventListener('DOMContentLoaded', function () {
  // Отримання об'єкта заголовку та кнопки
  var zagol = document.querySelector('h1');
  var btn = document.querySelector('button');

  // a) Зменшення значення заголовку на 1
  btn.addEventListener('click', function () {
    zagol.textContent = zagol.textContent * 1 - 1;
  });

  // b) Значення заголовку постійно возводиться у квадрат
  var initialValue = 2;
  btn.addEventListener('click', function () {
    initialValue *= initialValue;
    zagol.textContent = initialValue;
  });

  // c) Значення заголовку ділиться на 3
  btn.addEventListener('click', function () {
    zagol.textContent = zagol.textContent / 3;
  });
});
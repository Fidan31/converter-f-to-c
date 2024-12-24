document.getElementById('convert').addEventListener('click', convertTime);
document.getElementById('reset').addEventListener('click', resetFields);

// добавляет обработчик события click который вызывает функцию convertTime
// то же самое делается для кнопки Reset c функцией resetFields

function convertTime() {
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');

  let hours = parseFloat(hoursInput.value) || 0;
  let minutes = parseFloat(minutesInput.value) || 0;
  let seconds = parseFloat(secondsInput.value) || 0;

//   hoursInput.value   получает значение из поля ввода
// parseFloat  преобразует строку в число с плавающей точкой
// || 0 если поле пустое или содержит неправильное данные,значение будет 0

  if (hours > 0) {
    minutes = hours * 60;
    seconds = hours * 3600;
    minutesInput.value = minutes.toFixed(2);
    // ограничивает число до 2 знаков после запятой
    secondsInput.value = seconds.toFixed(2);
  } else if (minutes > 0) {
    hours = minutes / 60;
    seconds = minutes * 60;
    hoursInput.value = hours.toFixed(2);
    secondsInput.value = seconds.toFixed(2);
  } else if (seconds > 0) {
    hours = seconds / 3600;
    minutes = seconds / 60;
    hoursInput.value = hours.toFixed(2);
    minutesInput.value = minutes.toFixed(2);
  } else {
    alert('Please enter a value in one of the fields!');
  }
}

function resetFields() {
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
}

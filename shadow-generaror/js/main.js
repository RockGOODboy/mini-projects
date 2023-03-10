//Функция принимает знаения
function cssShadow({
  font_size,
  offset_x,
  offset_y,
  blur,
  opacity,
  color,
  rgba
}) {
  //Общая переменная куа присваевается позиция тени контента, её общая размытость, а так же цвет
  let cssStyle = offset_x + "px " + offset_y + "px " + blur + "px " + rgba;
  //Нахождение элемента в HTML коде, в последтвии присваене ему переменной
  $('h1').css('text-shadow', cssStyle);
  //Нахждение элеммента по ID и вывод данных о него по цвету, прозраности и размеру тени контента. 16-ричная система
  $('#resultHex').val('background-color: ' + color + ';\nopacity: ' + opacity + '; \nfont-size: ' + font_size + 'px;');
  //Нахждение элеммента по ID и вывод данных о него по положению контанта в пространстве, цвету, прозраности и размеру тени контента. 10-ричная сстема
  $('#resultRgba').val('text-shadow: ' + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba + '\nfont-size: ' + font_size + 'px;');
}

//Вызов функции для передачи контанта по умолчанию
cssShadow({
  font_size: 40,
  offset_x: 4,
  offset_y: -1,
  blur: 0,
  opacity: 1,
  color: '#ff0000',
  rgba: 'rgba(255, 0, 0, 1)'
})

//Нахождения элемента в HTML коде, а так же зменение тени контента
$(document).on('input change', 'input', function(){
  //Размер шрифта
  let font_size = $('#font_size').val();
  //Позиционирование контента
  let offset_x = $('#offset_x').val();
  let offset_y = $('#offset_y').val();
  //Размытие
  let blur = $('#blur').val();
  //Прозрачность
  let opacity = $('#opacity').val();
  //Общее значение цвета
  let color = $('input[type="color"]').val()+'';
  //Кнвуртация тветов в 16ричный тип
  let red16 = color[1] + '' + color[2];
  let green16 = color[3] + '' + color[4];
  let blue16 = color[5] + '' + color[6];
  //Из 6-ричного типа данных ковертация в 10-ричный формат. В JS Это происходт автоматиески, нет необходимости создание для этого отдельных функций или исползование бблиотек
  let red10 = parseInt(red16, 16);
  let green10 = parseInt(green16, 16);
  let blue10 = parseInt(blue16, 16);
  //Присвоение данных в 10-ричном формате в переменную, ля её дальнейшего вывода на экран
  let rgba = 'rgba(' + red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')';

  //Присвоение влех зменений к котенту на сайте
  $('h1').css('fontSize', font_size + 'px');
  cssShadow({
    font_size: font_size,
    offset_x: offset_x,
    offset_y: offset_y,
    blur: blur,
    opacity: opacity,
    color: color,
    rgba: rgba
  })
})

let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

let min = 1, max = 7;

for(let i = 0; i < 100; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');

    let rand = min + Math.random() * (max + 1 - min);
    switch(Math.floor(rand)) {
        case 1:
            excel.classList.add('red');
            break;
        case 2:
            excel.classList.add('blue');
            break;
        case 3:
            excel.classList.add('green');
            break;
        case 4:
            excel.classList.add('yellow');
            break;
        case 5:
            excel.classList.add('white');
            break;
        case 6:
            excel.classList.add('purple');
            break;
        case 7:
            excel.classList.add('yellowgreen');
            break;
    }
}
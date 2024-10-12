let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);


let email = 'your_email@example.com';
let containsAtSymbol = email.includes('@');
let characterCount = email.length;
console.log(`містить символ @ : ${containsAtSymbol}`);
console.log(`кількість символів: ${characterCount}`);


let part1 = 'My';
let part2 = 'name';
let part3 = 'is';
let fullName = part1 + ' ' + part2 + ' ' + part3 + ' Viktor';// звичайний приклад додавання рядків і додаткоаого слова/речення
console.log(fullName);

let userName = 'Андрію';
let payment = 648;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`);
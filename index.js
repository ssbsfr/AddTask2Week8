// Дополнительное задание 2 Неделя 8

function isEqualSymbols(str1, str2) {
    // Удаляем пробелы и приводим строки к одному регистру
    const symbols = (str) => str.toLowerCase().replace(/\s+/g, '');
    // Сортируем буквы в строках и сравниваем
    return symbols(str1).split('').sort().join('') === symbols(str2).split('').sort().join('');
}

// Пример использования
console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 
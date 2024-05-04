// --------Задание №1-------- //
let arr = ["peach", "Apple", "banana", "apricot", "kiwi", "orange", "ananas"]
//---Отфильтровать слова которые нвчинаются на букву a/A---//
let filterArr = arr.filter(item =>item[0].toLowerCase() === "a")
console.log(filterArr);
//---Паказать общую длину всех строк с массива---//
let lengthArr = arr.reduce((first, last) => first + last.length,0)
console.log(lengthArr);
//---создать промпт который будет добавлять новые элементы в массив arr---//
let newArr = prompt("Введите новый элемент для массива")
arr.push(newArr)
console.log(arr);

//--------Задание №2--------//
let num1 = [3, 6, [7, 5]]
let num2 = [2, 9, [1, [4]]]
//---Объединить массив num1 и num2---//
//---Раскрыв лишнее массивы отсортируйте числа---//
let first = num1.flat()
let second = num2.flat()
let third = second.flat()
let end = first.concat(third)
console.log(end.sort());

//--------Задание №3--------//
let numbers = [23, 44, "Alex", "John", 3, 23, 10]
let names = ["Stark", "Tayler", "Adams"]
//---Удаляем имена из numbers , и сохраняем их в names---//
let name2 = numbers.splice(2, 2)
names.push(name2)
console.log(numbers);
//---Сделать условие, если массив names не содержит имя "Constantin" то добавить его---//
let examinetion = names.includes("Constantin")
if(examinetion === false) {
    names.push("Constantin")
}
console.log(names.flat());


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function multiOutput() {
    if (arguments.length === 1) {
        document.write(`<div> функція відпрацювала з одним елементом:${arguments[0]}</div>`);
    } else if (arguments.length === 2) {
        document.write(`<div> функція відпрацювала з двома елементами:${arguments[0]},${arguments[1]}</div>`);
    }
}
multiOutput(1);
multiOutput(1, 'Hello');
document.write(`<div>-----------------------------------------------------------------</div>`);
//-----------------------------------------------------------------------------------------------------------------------

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає 
// новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 8, 7, 6, 5, 4, 3, 2, 1];

function createNewArr(arg1, arg2) {
    let newArr = [];
    let length = 0;
    if (arg1.length >= arg2.length) {
        length = arg1.length;
    } else {
        length = arg2.length
    };
    for (i = 0; i < length; i++) {
        newArr.push(arg1[i] + arg2[i])
    };
    return newArr
}
console.log(createNewArr(arr1, arr2))

//-----------------------------------------------------------------------------------------------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arr3 = [{
        name: 'andrii',
        age: 30,
        status: false,
    },
    {
        manufacturer: 'Tesla',
        model: 'X',
        year: 2020,
    },
    {
        country: 'Ukraine',
        city: 'Lviv',
    }
];

function keyOfObject(array) {
    let keys = []
    for (item of array) {
        for (key in item) {
            keys.push(key)
        };
    };
    return keys;
}
console.log(keyOfObject(arr3));
//---------------------------------------------------------------------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function valueOfObject(array) {
    let values = [];
    for (item of array) {
        for (key in item) {
            values.push(item[key])
        }
    }
    return values;
}
console.log(valueOfObject(arr3));
//-------------------------------------------------------------------------------------------------

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

function changePlace(array, index) {
    let x;
    x = array[index + 1];
    array[index + 1] = array[index];
    array[index] = x;
    console.log(array);
    return array
}
changePlace(arr1, 0);
//---------------------------------------------------------------------------------------------------------

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroArr = [
    1, 3, 5, 0, 6, 5, 0, 3, 0, 5, 3, 2, 0
];

function replaceZero(array) {
    let zero;
    for (key in array) {
        if (array[key] === 0) {
            zero = array.splice(key, 1);
            array.push(zero[0]);
        }
    }
    console.log(array);
}
replaceZero(zeroArr);
//--------------------------------------------------------------------------------------------------------------------------
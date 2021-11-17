// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minValue(num1, num2, num3) {
    let x = 0;
    if (num1 < num2 && num1 < num3) {
        x = num1;
    } else if (num2 < num1 && num2 < num3) {
        x = num2;
    } else {
        x = num3;
    }
    console.log(x)
    return x;
}
minValue(2, 6, 8);
//--------------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxValue(num1, num2, num3) {
    let x = 0;
    if (num1 > num2 && num1 > num3) {
        x = num1;
    } else if (num2 > num1 && num2 > num3) {
        x = num2;
    } else {
        x = num3;
    }
    console.log(x)
    return x;
};
maxValue(2, 5, 8);
//----------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найбільше число з масиву
let arr1 = [
    1, 2, 3, 4, 45, 6, 7, 8, 9, 0, -5
]

function maxValueOfArray(array) {
    let x = array[0];
    for (value of array) {
        if (value > x) {
            x = value;
        };
    };
    console.log(x);
    return x;
}
maxValueOfArray(arr1);
//----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву

function minValueOfArray(array) {
    let x = array[0];
    for (value of array) {
        if (value < x) {
            x = value;
        };
    };
    console.log(x);
    return x;
};
minValueOfArray(arr1);
//-----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfArray(array) {
    let sum = 0;
    for (value of array) {
        sum = sum + value;
    }
    console.log(sum)
    return sum;
};
sumOfArray(arr1);
//---------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function averageOfArray(array) {
    let sum = 0;
    let items = array.length;
    for (value of array) {
        sum = sum + value;
    }
    let average = sum / items;
    console.log(average);
    return average;
};
averageOfArray(arr1);
//---------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function maxAndMinValue() {
    let max = arguments[0];
    let min = arguments[0];
    for (value of arguments) {
        if (value > max) {
            max = value;
        };
        if (value < min) {
            min = value;
        };
    };
    console.log(`найбільше значення: ${max}`);
    return min;
};
maxAndMinValue(1, 2, 0, 5, 6, 8, 6546544, 5, -9, -8, 0, 8, 4568, -8456);
//--------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function arrayPushRandom() {
    let array = [];
    for (i = 0; i < 40; i++) {
        array.push(Math.round(Math.random() * 100))
    }
    console.log(array);
    return array;
};
arrayPushRandom();
//---------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує 
// кінцеве значення діапазону.

function arrayPushRandomLimit(limit) {
    let array = [];
    for (i = 0; i < 40; i++) {
        array.push(Math.round(Math.random() * limit))
    }
    console.log(array);
    return (array);
};
arrayPushRandomLimit(50);
//-----------------------------------------------------------------------------------------------------------------------

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverse(array) {
    let reverseArray = []
    for (value of array) {
        reverseArray.unshift(value);
        console.log(value)
    }
    console.log(reverseArray);
    return reverseArray;
};
reverse(arr1);
//-------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfRectangle(sideA, sideB) {
    let area = sideA * sideB;
    return area;
}
document.write(`<div> площа прямокутника = ${areaOfRectangle(5, 2)} </div>`);
document.write(`<div>-----------------------------------------</div>`);
//---------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfcircle(radius) {
    let area = 3.14 * radius * radius;
    return area;
}
document.write(`<div> площа круга = ${areaOfcircle(5)} </div>`);
document.write(`<div>-----------------------------------------</div>`);
//----------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCylinder(height, radius) {
    let area = 2 * 3.14 * radius * height;
    return area;
}
document.write(`<div> площа циліндра = ${areaOfCylinder(5, 2)} </div>`);
document.write(`<div>-----------------------------------------</div>`);
//----------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [1, 3, true, 'Andrii', false, 135, '867'];

function showItems(array) {
    document.write(`<div>'створити функцію яка приймає масив та виводить кожен його елемент'</div>`)
    for (item of array) {
        document.write(`<div>${item}</div>`);
    }
    document.write(`<div>-----------------------------------------</div>`);
}
showItems(arr1)
    //-------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(txt) {
    document.write(`<p>${txt}</p>`);
}
createParagraph(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ducimus enim iste quasi consequatur tempore suscipit voluptate possimus nobis nulla quisquam praesentium optio repellendus. Excepturi reprehenderit ipsum doloremque consequuntur hic. Cum harum doloremque, nobis dolorem sed voluptates laboriosam saepe fugit libero nostrum laborum veritatis eos asperiores dicta voluptatibus fuga officia.'
);
document.write(`<div>-----------------------------------------</div>`);
//--------------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(txt) {
    document.write(`
    <ul>
    <li>${txt}</li>
    <li>${txt}</li>
    <li>${txt}</li>
    </ul>
    `);
}
createList('paragraph');
document.write(`<div>-----------------------------------------</div>`);
// -----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListFlexible(txt, numberOfLi) {
    document.write(`<ul>`);
    for (i = 1; i <= numberOfLi; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
createListFlexible('some text', 4);
document.write(`<div>-----------------------------------------</div>`);
//----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createOrderetList(array) {
    document.write(`<ol>`)
    for (item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ol>`);
}
createOrderetList(arr1);
document.write(`<div>-----------------------------------------</div>`);
//----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

let arr2 = [{
        id: 1,
        name: 'Andrii',
        age: 30,
    },
    {
        id: 2,
        name: 'Andrii2',
        age: 302,
    },
    {
        id: 3,
        name: 'Andrii3',
        age: 303,
    },
    {
        id: 4,
        name: 'Andrii4',
        age: 304,
    },
];

function createDocument(array) {
    for (item of array) {
        document.write(`
        <div>
                <h2>${item.name}</h2>
                <p>ID:${item.id}</p>
                <p>age:${item.age}</p>
                <hr>
                </div>
                `);
    };
};
createDocument(arr2);
//----------------------------------------------------------------------------------------------------------------------------
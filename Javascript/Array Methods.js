// For each Method -> calls the function once per element in the array

const numbers=[1,2,3,4,5,6,7,8,9,10];

// function print(element)
// {
//     console.log(element);
// }
// numbers.forEach(print);

//********** Same Like For loop\ For of loop ***********
// function print(element){
//     for(let i=0;i<element;i++)
//     {
//         console.log(numbers[i]);
//     }
// }
// print(10);

// numbers.forEach(function (el){
//     if(el % 2 == 0)
//     {
//         console.log(el)
//     }
// })

// Map Method -> Creates a new array with the results of calling a callback on every element in array  

const doubles=numbers.map(function (num){
    console.log(num*2);
})
4
//original array->numbers=[1,2,3,4,5,6,7,8,9,10]
//output-> doubles=[2,4,6,8,10,12,14,16,18,20]
// scope of variable in function

// function days() //all fine
// {
//     let day1="Monday";
//     console.log(day1);
// }
// days();

// let day2="Tuesday";
// function days() //scope of variable day2 declare inside function is valid inside function only
// {
//     let day2="Monday";
// }
// console.log(day2);  prints tuesday only
// days();


let day2="Tuesday";
function days() //scope of variable day2 declare inside function is valid inside function only
{
    let day2="Monday";
    console.log(day2);
}
console.log(day2);
days();

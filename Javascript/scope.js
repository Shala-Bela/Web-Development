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


// let day2="Tuesday";
// function days() //scope of variable day2 declare inside function is valid inside function only
// {
//     let day2="Monday";
//     console.log(day2);
// }
// console.log(day2);
// days();

// Block Scope

// let radius=8;
// if(radius>0)
// {
//     const PI=3.14;
//     let circ=2*PI*radius;
// }
// console.log(radius); // print 8
// console.log(PI); //  not defined
// console.log(circ);  // not defined

// Lexical Scope

function game_list()
{
    const games=['Cricket','Kho-kho','Football','Basketball'];  // variable defined inside game_list function is accessible inside played_game
    function played_game()    // variable defined inside played_game is not accessible in game_list function
    {
        for(let game of games)
        {
            console.log(`Played game is ${game}`);
        }
    }
    played_game();
}
game_list();
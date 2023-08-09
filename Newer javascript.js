//******** Default Parameter ********//

function rollDie(num){
    return Math.floor(Math.random()*num)+1;
}  // rollDie() -> NaN (output)

// Old Method
function rollDie(num){
    if(num==undefined)
    {
        num=6;
    }
    return Math.floor(Math.random()*num)+1;
}

// New Mathod
function rollDie(num=6){
    return Math.floor(Math.random()*num)+1;
}
// We can assign default value to passed parameter in new method

// Order matters so we should always define default value at second position or at the end in parameter list.

function greet(name,msg="Hello")
{
    console.log(`${msg} ${name}`);
}
// greet("Shalaka")->Hello Shalaka
// but if we pass default parameter at first position then we get output as Shalaka undefined 

// ************* Spread *************//
// spread syntax-> (...)

const num=[1,2,34,56,23,89,65,12];
const maximum=Math.max(num)
// const maximum=Math.max(...num)
// {
//     console.log(num);
// }

function printNum(){
    console.log(..."Hello");  // H e l l o ..... Same for array
}

// On array

const GroupA=['Shital','Saloni','Sayali','Reva','Riddhi','Vaishnavi'];
const GroupB=['Shalaka','Gautami','Anoop','Lokesh','Shreeraj','YashK','Sanket','Aaditya','Dhruva'];

const Combine=[...GroupB, ...GroupA];

const name=console.log([...'Shalaka']);

// On Object

const cartoon={name:'Doraemon',rating:9};
const cartoon2={name:'Shinchan',channel:'Disney'};

const info={...cartoon,...cartoon2};
// In both object, name is constant but due to preferences Doraemon got over written by Shinchan

//*************** Rest ***********//
//In rest we are collecting arguments in a single variable

function sum(...num)
{
    console.log(num);// If we passed 2 argument to this function its going to take only one but if we use rest(...num) then num will include all the parameters pass to it.
}

//************* Destructing of array ************//

const array=['Riya','Shalaka','Kanak','Gautami','Tanaya'];

const [first,second,third,...rest]=array;

//************** Destructing of object ***************//

const user={
    firstName:'Shalaka',
    lastName:'Vyawhare',
    email:'Shala123@gmail.com',
    password:'shalav12',
    state:'Maharashtra'
}

// const {firstName,lastName}=user
const {firstName,lastName,birthYear=2003}=user;

//************** Destructing of parameter *************//

const Movie=
[
    {
        title:'The Nun',
        rating:8,
        year:1970
    },
    {
        title:'Barbie',
        rating:9,
        year:1999
    },
    {
        title:'Jab we met',
        rating:7,
        year:2010
    },
    {
        title:'Ved',
        rating:6,
        year:2000
    }
]
    
         Movie.map(({title,year})=>{
            return (`${title} is in year ${year}`)
         })

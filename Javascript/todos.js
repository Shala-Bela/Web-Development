let input=prompt("What would you like to do?");
const todos=["Wake up early in the morning","do web","do DSA"];
while(input!=="quit" && input!=="q")
{
    if(input==="list")
    {
        console.log("****************");
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i}:${todos[i]}`);
        }
        console.log("****************");
    }
    else if(input==="new")
    {
        const newTodo=prompt("Okkk!!! Add new todo in the list....What would you like to enter?");
        todos.push(newTodo)
        console.log(`${newTodo} added successfully in the list`);
    }
    else if(input==="delete")
    {
        const index=parseInt(prompt("Ok...Enter index which you want to delete"));
        if(!Number.isNaN(index))
        {
            const deleted=todos.splice(index,1);
            console.log(`Ok...${deleted[0]} deleted successfully`);
        }else{
            console.log("Unknown index");
        }
    
    }
    input=prompt("What would you like to do?");
}
console.log("Ok Quit The App!!!!!!!!");
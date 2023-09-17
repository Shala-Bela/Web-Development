
const form=document.querySelector("#formsearch");

form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm=form.elements.query1.value; //Inside the event listener function, extract the user's search query from the form's input field with the name "query1" and store it in the searchTerm variable
    if (searchTerm.trim() === '') {
        // Remove all existing images from the body
        const images = document.querySelectorAll('img');
        for (const img of images) {
            img.remove();
        }
        return; // Exit the function if the search term is empty
    }
    const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);//Send an HTTP GET request to the TVmaze API using Axios. It constructs the API URL with the user's search term
    makeImages(res.data);
    // console.log(res.data)

})

const makeImages=(shows)=>
{
    for(let result of shows)
    {
        const img=document.createElement('IMG');
        img.src=result.show.image.medium;
        document.body.append(img);  
    }
}

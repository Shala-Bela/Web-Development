const btn=document.querySelector('button');
btn.addEventListener('click',function()
{
    const newC=RandomColor();
    document.body.style.backgroundColor=newC;
    const h1=document.querySelector('h1');
    h1.innerText=newC;


})
function RandomColor()
{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    const newColor=`rgb(${r},${g},${b})`;
    return newColor;
    
}

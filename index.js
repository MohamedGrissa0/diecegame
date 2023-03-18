var randomNumber1 = Math.floor(Math.random()*6)+1
console.log(randomNumber1)
var h1=document.querySelector('h1')
var image=document.querySelector('.img1')
if(randomNumber1===1)
{
image.setAttribute('src','images/dice1.png')
}
else if(randomNumber1===2)
{
image.setAttribute('src','images/dice2.png')
}
else if(randomNumber1===3)
{
image.setAttribute('src','images/dice3.png')
}
else if(randomNumber1===4)
{
image.setAttribute('src','images/dice4.png')
}
else if(randomNumber1===5)
{
image.setAttribute('src','images/dice5.png')
}
else{
image.setAttribute('src','images/dice6.png')
}
var randomNumber2 = Math.floor(Math.random()*6)+1
var image2=document.querySelector('.img2')

console.log(randomNumber2)
if(randomNumber2===1)
{
image2.setAttribute('src','images/dice1.png')
}
else if(randomNumber2===2)
{
image2.setAttribute('src','images/dice2.png')
}
else if(randomNumber2===3)
{
image2.setAttribute('src','images/dice3.png')
}
else if(randomNumber2===4)
{
image2.setAttribute('src','images/dice4.png')
}
else if(randomNumber2===5)
{
image2.setAttribute('src','images/dice5.png')
}
else{
image2.setAttribute('src','images/dice6.png')
}
if(randomNumber1>randomNumber2)
{
    h1.innerText ="PLAYER 1 WIN"
}
else if(randomNumber2>randomNumber1)
{
    h1.innerText = "PLAYER 2 WIN"
}
else 
{
    if(randomNumber1===randomNumber2)
{
    h1.innerText = "DRAW"
}
}
console.log(h1)
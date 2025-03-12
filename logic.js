let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote: `"Arise, awake, and stop not until the goal is reached"`,
    person:`-Swami Vivekananda`
},{
    quote:`"Take the stones people throw at you, and use them to build a monument".`,
    person:`-Ratan Tata`
},
{ quote:`"What I want young women and girls to know is: You are powerful and your voice matters."`,
    person:`-Kamala Harris`

},
{
quote:`"Strive not be a success, but rather to be of value."`,
person:`-Albert Einstein`
},{
    quote:`"Life loses half its interest if there is no struggle—if there are no risks to be taken"`,
    person:`-Netaji Subhash Chandra Bose`
},{

    quote:`"Every Man desires to live long; but no Man would be old."`,
    person:`-Taylor Swift`
}
]

btn.addEventListener('click',function(){
 let random=Math.floor(Math.random()*quotes.length);
 quote.innerText=quotes[random].quote;
 person.innerText=quotes[random].person;

})
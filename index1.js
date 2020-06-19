let jsonQuotes;

function getQuotesJson(){  //function syntax
fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
.then(res => res.json()) //change the data from http to json format
.then(data => {
    
jsonQuotes=data;
//console.log(jsonQuotes.quotes);
displayQuote();
});

}



displayQuote = () => { //arrow function
// let x=getRandomNumber;
 //console.log(jsonQuotes)
let quote=jsonQuotes.quotes[Math.floor(Math.random()*jsonQuotes.quotes.length)];
//console.log(quote)
let newquote = quote.quote;
let newauthor = quote.author;

document.getElementById("text").innerHTML=newquote;
document.getElementById("author").innerHTML=newauthor;

document.getElementById("tweet-quote").setAttribute("href", "http://www.twitter.com/intent/tweet?text="+newquote+" - "+newauthor);
}



document.getElementById("new-quote").addEventListener('click',function (){
    getQuotesJson();
})




// vanilla js ready func equivalent
document.addEventListener('DOMContentLoaded', function(){ 
    getQuotesJson();
  }, false);


setInterval(convertRate, 10000);
async function convertRate() {

                     
    // fetching the resource by setting values in the fetch function
    var response = await fetch('https://api.quotable.io/quotes', 
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json'
                        }
                    });

    if (response.ok) {
        var res = await response.json()
        // Array of inspirational quotes
        QuoteArray =[];
        var quotes =res.results
        quotes.forEach(function (foreacharray) {
        quoteArray = foreacharray.content
        // Array of inspirational quotes
        QuoteArray[QuoteArray.length] =  quoteArray
    });


    // Function to get a random quote
       function getRandomQuote() {
    return  QuoteArray[Math.floor(Math.random() *  QuoteArray.length)];
}



// Function to display a new quote
        function displayNewQuote() {
                var quoteElement1 = document.getElementById('quote1');
                 var quoteElement2 = document.getElementById('quote2');
                 var quoteElement3 = document.getElementById('quote3');
                 var newQuote1 =getRandomQuote();
                 var newQuote2 = getRandomQuote();
                var newQuote3 = getRandomQuote();
                 quoteElement1.textContent = newQuote1;
                 quoteElement2.textContent = newQuote2;
               quoteElement3.textContent = newQuote3;
             }
            
            
            
        setInterval(displayNewQuote(), 15000);
            displayNewQuote()
    } else {
        console.error('Failed to fetch quotes:', response.statusText);
       return {'success':false}
       
    }


}

var btn=document.getElementById('btn');
var outputQuote=document.getElementById('output_quote');
var outputAuthor=document.getElementById('output_author');
var quote=[
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be yourself; everyone else is already taken.",
    "Be the change that you wish to see in the world.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "We are all in the gutter, but some of us are looking at the stars.",
    "You only live once, but if you do it right, once is enough.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You must be the change you wish to see in the world.",
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
    "Life isn’t about finding yourself. Life is about creating yourself.",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    "Don’t cry because it’s over, smile because it happened.",
    "There is no greater agony than bearing an untold story inside you.",
    "The journey of a thousand miles begins with one step.",
    "Not all those who wander are lost.",
    "It always seems impossible until it’s done.",
    "We do not remember days; we remember moments.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "I am not what happened to me, I am what I choose to become.",
    "You miss 100% of the shots you don't take.",
    "Everything you can imagine is real.",
    "It is never too late to be what you might have been.",
    "A room without books is like a body without a soul.",
    "The only thing we have to fear is fear itself.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "The only impossible journey is the one you never begin.",
    "It’s not what happens to you, but how you react to it that matters.",
    "The only way to deal with this life meaningfully is to find one's passion and pursue it relentlessly.",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "Try not to become a man of success. Rather become a man of value.",
    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Love the life you live. Live the life you love.",
    "You must be the change you wish to see in the world.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Happiness depends upon ourselves.",
    "To love and be loved is to feel the sun from both sides.",
    "We accept the love we think we deserve.",
    "It takes courage to grow up and become who you really are.",
    "If you tell the truth, you don't have to remember anything.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "Don’t cry because it’s over, smile because it happened."
  ];
  
  var quoteAuthors = [
    "-- Steve Jobs",
    "-- Robert Frost",
    "-- Ralph Waldo Emerson",
    "-- Albert Einstein",
    "-- Oscar Wilde",
    "-- Mahatma Gandhi",
    "-- Martin Luther King Jr.",
    "-- Oscar Wilde",
    "-- Oscar Wilde",
    "-- Mae West",
    "-- Confucius",
    "-- Mahatma Gandhi",
    "-- Abraham Lincoln",
    "-- John Lennon",
    "-- George Bernard Shaw",
    "-- Mark Twain",
    "-- Dr. Seuss",
    "-- Maya Angelou",
    "-- Lao Tzu",
    "-- J.R.R. Tolkien",
    "-- Nelson Mandela",
    "-- Cesare Pavese",
    "-- Winston Churchill",
    "-- Carl Jung",
    "-- Wayne Gretzky",
    "-- Pablo Picasso",
    "-- George Eliot",
    "-- Marcus Tullius Cicero",
    "-- Franklin D. Roosevelt",
    "-- Ralph Waldo Emerson",
    "-- Tony Robbins",
    "-- Epictetus",
    "-- Unknown",
    "-- C.S. Lewis",
    "-- Albert Einstein",
    "-- Albert Einstein",
    "-- Buddha",
    "-- Bob Marley",
    "-- Mahatma Gandhi",
    "-- Mahatma Gandhi",
    "-- Aristotle",
    "-- David Viscott",
    "-- Stephen Chbosky",
    "-- E.E. Cummings",
    "-- Mark Twain",
    "-- Ralph Waldo Emerson",
    "-- Dr. Seuss"
  ];
  
var lastIndex = 0
var randomIndex
  btn.addEventListener('click', function(){
   do {randomIndex = Math.floor(Math.random() * quote.length)}
   while (lastIndex === randomIndex);
    var randomQuote = quote[randomIndex];
    var randomAuthor = quoteAuthors[randomIndex];
    lastIndex=randomIndex

  outputQuote.innerHTML = `"${randomQuote}"`;
  outputAuthor.innerHTML = (randomAuthor);
});
  
const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
    invited. forEach((element) =>{
    console.log(element);
});

const TavoloVip = invited.map((element) => {
    return element + ' 9c ' + ' black ';
});
console.log(TavoloVip);

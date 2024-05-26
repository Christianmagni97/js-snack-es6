const bicycle = [
    {
        name: 'bicicletta nera', peso: '7.4'
    },
    {
        name: 'bicicletta grigia', peso: '8'
    },
    {
        name: 'bicicletta bianca', peso: '7'
    },
    {
        name: 'bicicletta verde', peso: '7.4'
    },
    {
        name: 'bicicletta rossa', peso: '8.2'
    },
    {
        name: 'bicicletta azzurra', peso: '6.9'
    },
    {
        name: 'bicicletta gialla', peso: '9.3'
    }
]
const lightBicycle = [];
let peso = 0;
bicycle.forEach((bicicletta)=> {
    weight += Number.parseInt(bicicletta.peso, 10);
    if (bicicletta.peso < 7.1){
    lightBicycle.push(bicicletta)
});
console.log(peso, lightBicycle);

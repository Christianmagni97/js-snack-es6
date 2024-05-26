let footballTeam = [
    {
        name: 'Sampdoria', points: 0, fouls: 0,
    },
    {
        name: 'Lazio', points: 0, fouls: 0,
    },
    {
        name: 'Juventus', points: 0, fouls: 0,
    },
    {
        name: 'Milan', points: 0, fouls: 0,
    },
    {
        name: 'Atalanta', points: 0, fouls: 0,
    },
    {
        name: 'Bari', points: 0, fouls: 0,
    },
];
function pointsAndFouls(){
    let points = Math.floor((Math.random()* 90 )+ 1);
    let fouls = Math.floor((Math.random()* 90 )+ 1);
    console.log(pointsAndFouls);
};
console.log(footballTeam, pointsAndFouls);
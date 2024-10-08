const coins = [];
function collectCoin(details, callback){

    const points = randomizePoints();
    coins.push({details, points});

    setTimeout (function() {
    console.log('validate collection:', coins)
   callback(coins);

    }, 2000)

}
function randomizePoints(){
  
    const maxPoints = 10;
    const minPoints = 1;
    const points = Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;
  
    console.log('points earned:', points);
    return points;
}
collectCoin('player1', randomizePoints);

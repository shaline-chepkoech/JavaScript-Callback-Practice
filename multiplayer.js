const coins = [];
const winningPoint = 50;
function collectCoin(details, callback){

    const points = randomizePoints();
    const validationFailed = Math.random() < 0.1;
    if (validationFailed === true) {
        console.log(`Coin collection failed for: ${details}. Points missed!`);
    } else {coins.push({details, points});
}
    setTimeout (function() {
    console.log('validate collection:', coins)
    const totalPoints = calculateTotalPoints();
    console.log(`Total score: ${totalPoints}`);

    if(totalPoints > winningPoint){
        console.log('You have won the game');
    }
    
   callback(coins);

    }, 2000)

}
function randomizePoints(){
  
    const maxPoints = 10;
    const minPoints = 1;
    const points = Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;
    return points;
}
function calculateTotalPoints() {
    return coins.reduce((accumulator, coin) => accumulator + coin.points, 0);
    
}


collectCoin('player1',calculateTotalPoints);

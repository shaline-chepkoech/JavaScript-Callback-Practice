let player1 = {
    name: "Player 1",
    health: 100
};

let player2 = {
    name: "Player 2",
    health: 100
};

function turnBasedBattle(player1, player2) {
    const min = 1;
    const max = 20;

    let currentPlayer = player1;
    let opponent = player2;

    function attack() {
        const damage = Math.random() * (max - min + 1) + min;

    
    opponent.health -= damage;

    console.log(`${currentPlayer.name} attacks!`);
    console.log(`${currentPlayer.name} Health: ${currentPlayer.health.toFixed(2)}`);
    console.log(`${opponent.name} Health: ${opponent.health.toFixed(2)}`);

    
    if (opponent.health <= 0) {
        console.log(`${currentPlayer.name} has won!`);
    } else {
        
        [currentPlayer, opponent] = [opponent, currentPlayer]; 
        setTimeout(attack, 1000); 
    }
}


attack();
}
turnBasedBattle(player1, player2);
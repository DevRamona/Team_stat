const team = {
    _players: [
        {
            firstName: "Lionel",
            lastName: "Messi",
            age: 50
        },
        {
            firstName: "Cristiano",
            lastName: "Ronaldo",
            age: 32
        },
        {
            firstName: "Neymar",
            lastName: "Jr",
            age: 30
        }
        
    ],
    _games: [
        {
            opponent: "Barcelona",
            teamPoints: 3,
            opponentPoints: 2
        },
        {
            opponent: "Real Madrid",
            teamPoints: 1,
            opponentPoints: 1
        },
        {
            opponent: "Bayern Munich",
            teamPoints: 2,
            opponentPoints: 1
        }
    ],
    addPlayer(newFirstName, newLastName, newAge){
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
    },
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    }
};
team.addPlayer("Kylian", "Mbappe", 24);
team.addGame("Paris Saint-Germain", 3, 0);
console.log(team.games);




/*We want to create, retrieve, and add information about your favorite sports team.
Basketball, soccer, tennis, or water polo, you pick it.
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.*/

const team = {
  _players: [{firstName:'Lachlan', lastName:'Bidner', age:28},
             {firstName:'Iris', lastName:'Wood', age:26},
             {firstName:'Abbie', lastName:'Woodley', age:27}],
  //players object to store players
  _games: [{opponent: 'other team 1', teamPoints: 3, opponentPoints: 2},
           {opponent: 'other team 2', teamPoints: 4, opponentPoints: 3},
           {opponent: 'other team 3', teamPoints: 5, opponentPoints: 6}],
  //games object to store games
  get players () {
    return this._players;
  },
  //getter to get the current _players key values 
  get games () {
    return this._games;
  },
  //getter to get the current _games key values
 addPlayer (newFirstName, newLastName, newAge) {
   let player = [{firstName: newFirstName, lastName: newLastName, age: newAge}];
   this._players.push(player);
 },
 //method for adding new players and add them to the _players object
 addGame (newOpponent, newTeamPoints, newOpponentPoints) {
   let game = [{opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints}];
   this._games.push(game);
 }
 //method for adding new game stats and adding them to the _games object 
}
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
//calling the method to add a new player to the team and testing it worked as intended. Drafted straight from Space Jam.
team.addGame('Titans', 100, 98);
console.log(team.games)
//calling the method to add a games stats to the _game object and testing it worked as intended
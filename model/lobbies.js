//array of currently open lobbies
var nextlobbyid = 0;
let lobbies = [];

const date = new Date().toLocaleDateString("de-DE");

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var h = rand(1,6) * 60;
    var s = 100;
    var l = 80;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function createLobby(host,lobbySize,lobbyDiff){

    let someplayerconstructstuffthatidontknowwhattocall = {
        player : host,
        color : get_random_color(),
        boardObjArray : [],
        guessedFirst : []
    }

    let connected_players = [];
    connected_players.push(someplayerconstructstuffthatidontknowwhattocall);

    let lobby = {
        id : nextlobbyid,
        lobbySize : lobbySize,
        lobbyDiff : lobbyDiff,
        lobbyOpen : true,
        gameOver : false,
        winner : '',
        firsts : [],
        connected_players : connected_players,
        dateplayed : date,
        correctedSudoku : [],
        chat : []
    }
    
    lobbies.push(lobby);
    nextlobbyid++;

    return lobby;
}

function joinLobby(lobbyID, guest){
    
    lobbies.forEach(lobby => {
        if(lobby.id == lobbyID){
            if(lobby.connected_players.length < lobby.lobbySize) {
                let someplayerconstructstuffthatidontknowwhattocall = {
                    player : guest,
                    color : get_random_color(),
                    boardObjArray : [],
                    guessedFirst : []
                }
                lobby.connected_players.push(someplayerconstructstuffthatidontknowwhattocall);
                return lobby;
            }
            console.log('tried to join a full lobby');
            return "not enough space";
        }
    });
    return "lobby not found which means your code sucks"
}

function exitLobby(lobbyID, player){
    lobbies.forEach(lobby => {
        if(lobby.id == lobbyID){
            for (let i = 0; i < lobby.connected_players.length; i++)
            {
                if (lobby.connected_players[i].player == player){
                    lobby.connected_players.splice(i,1);
                }
            }
            if(lobby.connected_players.length == 0) {
                for (let i = 0; i < lobbies.length; i++) {
                    if (lobbies[i].id == lobbyID) {
                        lobbies.splice(i,1);
                    }
                }
            }
            return lobby;
        }
    });
    return "lobby not found which means your code sucks"
}

module.exports = {
    lobbies : lobbies,
    createLobby,
    joinLobby,
    exitLobby
}
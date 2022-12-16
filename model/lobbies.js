//array of currently open lobbies
var nextlobbyid = 0;
let lobbies = [];


function createLobby(host,lobbySize,lobbyDiff){

    let someplayerconstructstuffthatidontknowwhattocall = {
        player : host,
        socket_id : "",
        boardObjArray : []
    }

    let connected_players = [];
    connected_players.push(someplayerconstructstuffthatidontknowwhattocall);

    let lobby = {
        id : nextlobbyid,
        lobbySize : lobbySize,
        lobbyDiff : lobbyDiff,
        connected_players : connected_players
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
                    socket_id : "",
                    boardObjArray : []
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
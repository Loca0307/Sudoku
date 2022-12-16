//array of currently open lobbies
var nextlobbyid = 0;
let lobbies = [];


function createLobby(host,lobbySize,lobbyDiff){
    let connected_players = {
        player : [],
        boardObjArray : []
    }

    connected_players.player.push(host);

    let lobby = {
        id : nextlobbyid,
        lobbySize : lobbySize,
        lobbyDiff : lobbyDiff,
        connected_players : connected_players
    }
    
    lobbies.push(lobby);
    nextlobbyid++;
    
    console.log(lobby.connected_players.player);
    return lobby;
}

function joinLobby(lobbyID, guest){
    
    lobbies.forEach(lobby => {
        if(lobby.id == lobbyID){
            if(lobby.connected_players.player.length < lobby.lobbySize) {
                lobby.connected_players.player.push(guest);
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
            for (let i = 0; i < lobby.connected_players.player.length; i++)
            {
                if (lobby.connected_players.player[i] == player){
                    lobby.connected_players.player.splice(i,1);
                }
            }
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
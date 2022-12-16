//array of currently open lobbies
var nextlobbyid = 0;
let lobbies = [];


function createLobby(host,lobbySize,lobbyDiff){
    let connected_players = {
        player = [],
        boardObjArray = []
    }

    let lobby = {
        id : nextlobbyid,
        lobbySize : lobbySize,
        lobbyDiff : lobbyDiff,
        connected_players : connected_players.player.push(host) 
    }
    
    return lobbies.push(lobby);
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
    
}


const socket = io();

var inLobby = true;
var inGame = false;

var playerObj;

socket.on('connect', () => {
    console.log("socket.io connected");
});

//LOBBY MANAGEMENT SECTION

async function reloadLobbiesDisplayed() {
        let data = await api.reloadLobbies();
        let html = ejs.views_includes_mainsection(data);
        document.querySelector('div.lobcont').innerHTML = html;
        announce();

        if(inLobby) {
        var slider = document.getElementById("size");
        var output = document.getElementById("value");
        var diffslider = document.getElementById("mpdiff");
        var diffoutput = document.getElementById("diff-value");
        diffoutput.innerHTML = diffslider.value;
        output.innerHTML = slider.value;
        slider.oninput = function(){
          let value = this.value;
          if (this.value == 2)
            output.style.color = "lightgreen";
            else if(this.value == 3)
              output.style.color = "yellow";
              else 
                output.style.color = "red";
          output.innerHTML = value;}
        diffslider.oninput = function(){
          let value = this.value;
          if (this.value == 1)
          diffoutput.style.color = "lightgreen";
            else if(this.value == 2)
            diffoutput.style.color = "yellow";
              else 
              diffoutput.style.color = "red";
          diffoutput.innerHTML = value;}
        }

        else if (inGame && playerObj) {
            updateCells(playerObj.boardObjArray);
        }

}

async function host() {
    if(inLobby) {
        let size = document.getElementById('size').value;
        let mpdiff = document.getElementById('mpdiff').value;
        let data = await api.hostLobby(size, mpdiff);
        reloadLobbiesDisplayed();
    }
}

async function join(id) {
    if(inLobby) {
        let data = await api.joinLobby(id);
        reloadLobbiesDisplayed();
    }
}

async function leave(id) {
    let data = await api.leaveLobby(id);
    inGame = false;
    inLobby = true;
    reloadLobbiesDisplayed();
}

function chat() {
    let text = document.querySelector('input#newchat').value;
    let username = document.querySelector('input#username-holder').value;
    socket.emit('chat',{text , username});
}

function announce(){
    let username = document.querySelector('input#username-holder').value;
    socket.emit('announce-connect',username);
}

function updateCells(boardObjArray){
    let boardObj = boardObjArray[boardObjArray.length - 1];
    console.log(boardObj);
    for (let i = 0; i < 81; i++){
        let cell = document.getElementById('input-'+i);
        if (boardObj.fullboard[i] == 0) {
            cell.value = '';
        }
        else {
            cell.value = boardObj.fullboard[i];
        }
    }
    boardObj.givenNumberIndexes.forEach(index => {
        let cell = document.getElementById('input-'+index);
        cell.readOnly = true;
        cell.classList.add("givennumber");
    });
    boardObj.correctIndexes.forEach(index => {
        let cell = document.getElementById('input-'+index);
        cell.classList.add("correct-cell");
    });
    boardObj.wrongIndexes.forEach(index => {
        let cell = document.getElementById('input-'+index);
        cell.classList.add("wrong-cell");
    });
    boardObj.playerNumberIndexes.forEach(index => {
        let cell = document.getElementById('input-'+index);
        cell.addEventListener('change', (event) => {
            let username = document.querySelector('input#username-holder').value;
            let boardarr = []
            for (let i = 0; i < 81 ; i++) {
                let cellval = document.getElementById('input-'+i).value;
                boardarr.push(cellval);
            }
            socket.emit('game-update', {username, boardarr});
        });
    });
}

socket.on('reloadlobby', () => {
    console.log("lobbies reloaded");
    reloadLobbiesDisplayed();
});

socket.on('start-game', function (p) {
    inLobby = false;
    playerObj = p;
    inGame = true;
    reloadLobbiesDisplayed();
    
    
});

socket.on('update-game', function (p) {
    inLobby = false;
    playerObj = p;
    inGame = true;
    reloadLobbiesDisplayed();
    
});

socket.on('test', () => {
    console.log("test string received");
});


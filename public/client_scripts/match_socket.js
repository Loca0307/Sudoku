const socket = io();

socket.on('connect', () => {
    console.log("socket.io connected");
});


function socket_init() {

    socket.emit("multiplayer_connected", room);

    socket.on('multiplayer_connected', (a) => {
        console.log("Someone connected!", a);
        document.querySelector("main").innerHTML = ejs.views_waitroom({ready: 2});
    
    });

    socket.on('multiplayer_disconnected', (a) => {
        console.log("Someone Disconneted!", a);
        document.querySelector("main").innerHTML = ejs.views_waitroom({ready: 1});

    });



    document.querySelectorAll("#button1").forEach(link => {
        link.addEventListener("click", async (e) => {
            
            
            let url = new URL(e.currentTarget.href);
            let path = url.pathname;
            console.log("url:", url);
            // here in the if loop we have give the path right?


            
            if(path == "/waitroom") {
        
                console.log("waitroom in progress");
                socket.emit("multiplayer_connected", "player");
                //render the page
                document.querySelector("main").innerHTML = ejs.views_waitroom({ready});
                //data needs to be passed 
                
            }
            else if(path == "/multidouku") {
                console.log("MATCH");
                document.querySelector("main").innerHTML = ejs.views_multidouku({ready});
            }

            })
            
        })
    }
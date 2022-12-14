/**
 * Web Atelier 2022 
 * 
 * Client-side routes
 *
 */



const socket = io();

socket.on('connect', () => {
    console.log("socket.io connected");
});

socket.on('multiplayer_connected', (a) => {
    console.log("Someone connected!", a);
    document.querySelector("main").innerHTML = ejs.views_waitroom({ready: a[0]});

});

function init() {

    document.querySelectorAll("#button1").forEach(link => {
        link.addEventListener("click", async (e) => {
            
            
            let url = new URL(e.currentTarget.href);
            let path = url.pathname;

            // here in the if loop we have give the path right?


            
            if(path == "/waitroom") {
                console.log("waitroom in progress");
                socket.emit("multiplayer_connected", "player");
                //render the page
                document.querySelector("main").innerHTML = ejs.views_waitroom({});
                //data needs to be passed 
                
            }
            

            })
            
        })
    }
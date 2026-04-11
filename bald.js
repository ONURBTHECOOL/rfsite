function baldness() {
    welcome.innerHTML = "<h6>Hello Bald Person And Welcome To The Rotating Fish Official Site!!</h6>";
    buttons.innerHTML = "<button class='link-button' onclick='hair()'>Click here if you change your mind and are not bald!!!!!👎👎</button>";
    document.cookie = "baldness=true; path=/";
}

function checkBaldness() {
    if (document.cookie.includes("baldness=true")) {
        baldness();
    }
    if (document.cookie.includes("baldness=false")) {
        hair();
    }
}

function checkLoad() {
    if (document.cookie.includes("load=true")) {
        intentload();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    checkBaldness();
    checkLoad();
});

function hair() {
    document.cookie = "baldness=false; path=/";
    document.write("<link rel='stylesheet' href='/stylesheet2.css'><h6>Sorry This Site Is Only For Bald People!</h6>");
}
function intentload() {
    document.cookie = "load=true; max-age=3600; path=/";
    document.write("<link rel='stylesheet' href='/stylesheet.css'><h6>Loading...</h6>");
}
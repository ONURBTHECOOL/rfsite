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

document.addEventListener('DOMContentLoaded', () => {
    checkBaldness();
});

function hair() {
    document.cookie = "baldness=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.write("<link rel='stylesheet' href='/stylesheet2.css'><h6>Sorry This Site Is Only For Bald People!</h6>");
    location.reload();
}
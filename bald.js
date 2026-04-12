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

function noLoad() {
    document.cookie = "load=false; path=/";
    location.reload();
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
    document.write("<link rel='stylesheet' href='/stylesheet2.css'><h6>Sorry This Site Is Only For Bald People!</h6><button class='link-button' onclick='changeMind()'>Click here to go back to the site & admit that bald is beutifull!!!!!👍👍</button>");
}
function intentload() {
    document.cookie = "load=true; max-age=3600; path=/";
    document.write("<link rel='stylesheet' href='/stylesheet.css'><h6>Loading...</h6><p>Loading will take one hour, please wait...</p>");
    setTimeout(noLoad, 3600000);
}
function changeMind() {
    let result = confirm("Are you 100% sure you are bald? Click 'OK' to admit that bald is beutiful and regain site access. Click 'Cancel' to turn back and retain your hair.");
    if (result) {
        document.cookie = "baldness=true; path=/";
        location.reload();
    }
    else {
        document.cookie = "baldness=false; path=/";
        location.reload();
    }
}
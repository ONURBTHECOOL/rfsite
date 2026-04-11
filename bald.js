function baldness() {
    welcome.innerHTML = "<h6>Hello Bald Person And Welcome To The Rotating Fish Official Site!!</h6>";
    buttons.innerHTML = "<button class='link-button' onclick='hair()'>Click here if you change your mind and are not bald!!!!!👎👎</button>";
    document.cookie = "baldness=true; path=/";
}

function checkBaldness() {
    if (document.cookie.includes("baldness=true")) {
        baldness();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkBaldness();
});

function hair() {
    document.cookie = "baldness=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    location.reload();
}
let navLinks = document.querySelector(".nav-links");
let dialog = document.querySelector(".new-tweet-dialog");



function openNewTweetDialog() {
    dialog.showModal()
    document.querySelector(".dialog-profile-bubble").innerHTML = `<img src="${session.avatar_url}" width="100%"/>`
}

function closeNewTweetDialog() {
    dialog.close()
}

function logOut() {
    sessionStorage.removeItem("session");
    if (location.href.includes('/index.html')) {
        location.reload();
    } else {
        location.href = '../index.html';
    }
}

if (session == undefined) {
    navLinks.children[2].style.display = "none"     // profile
    navLinks.children[3].style.display = "none"     // saved
    navLinks.children[4].style.display = "none"     // close session
    navLinks.children[navLinks.children.length - 1].style.display = "none"  // tweet button
}

/* if (session) {
    navLinks.children[navLinks.children.length - 2].style.display = "none"
} */

function navigateToProfile() {
    let userId = session.user_id
    
    if (location.href.includes('index.html')) {
        location.href = './views/profile.html?userId=' + userId;
    } else {
        location.href = './profile.html?userId=' + userId;
    }
}
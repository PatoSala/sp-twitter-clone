let navLinks = document.querySelector(".nav-links");

function logOut() {
    sessionStorage.removeItem("session");
    if (location.href.includes('/index.html')) {
        location.reload();
    } else {
        location.href = '../index.html';
    }
}

if (session == undefined) {
    navLinks.children[2].style.display = "none"
    navLinks.children[3].style.display = "none"
    navLinks.children[4].style.display = "none"
    navLinks.children[navLinks.children.length - 1].style.display = "none"
}

if (session) {
    navLinks.children[navLinks.children.length - 2].style.display = "none"
}

function navigateToProfile() {
    let userId = session.user_id
    
    if (location.href.includes('index.html')) {
        location.href = './views/profile.html?userId=' + userId;
    } else {
        location.href = './profile.html?userId=' + userId;
    }
}
function navigate(routeName) {
    if (routeName === 'login') {
        if (location.href.includes('/index.html')) {
            location.href = './views/login.html';
        } else {
            location.href = '../views/login.html';
        }
    } else if (routeName === 'signup') {
        if (location.href.includes('/index.html')) {
            location.href = './views/register.html';
        } else {
            location.href = '../views/register.html';
        }
    }
}
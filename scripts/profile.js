
let queryString = location.search;
let params = new URLSearchParams(queryString);
let userId = params.get("userId");

async function fetchUserData(userId) {
    let url = "https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq." + userId;

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    console.log(jsonResponse);

    if (jsonResponse.length > 0) {
        document.querySelector('h1').innerHTML = jsonResponse[0].username;
        document.querySelector('.profile-picture-container').innerHTML = `<img src="${jsonResponse[0].avatar_url}" width="100px"/>`
        document.querySelector('h2').innerHTML = jsonResponse[0].username;
        document.querySelector('title').innerText = jsonResponse[0].username;
    }
}

window.addEventListener('load', e => {
    fetchUserData(userId);
});
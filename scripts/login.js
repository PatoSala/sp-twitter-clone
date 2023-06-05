
async function logIn() {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let url = "https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?email=eq." + email + "&password=eq." + password + "&select=*";

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
    if (jsonResponse.length === 0) {
        console.log('Error: ' + jsonResponse);
    } else {
        sessionStorage.setItem("session", JSON.stringify(jsonResponse[0]));
        location.href = "../index.html"
    }
    
}
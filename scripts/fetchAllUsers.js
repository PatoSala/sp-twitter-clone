let users = undefined;

async function fetchAllUsers() {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?select=*';

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    return users = jsonResponse;
}
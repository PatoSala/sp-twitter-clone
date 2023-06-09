let followers;
async function fetchFollowersRelations() {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/followers?select=*';

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        }
    });
    
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    return followers = jsonResponse;
}
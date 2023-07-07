let likes;

async function fetchLikes() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/likes?select=*`;

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    return likes = jsonResponse;
}
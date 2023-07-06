let likes;

async function fetchLikes() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/likes?user_id=eq.${session.user_id}`;

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
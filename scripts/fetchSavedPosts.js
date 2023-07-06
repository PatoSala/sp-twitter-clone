let savedPosts;

async function fetchSavedPosts() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/savedPosts?user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    return savedPosts = jsonResponse
}
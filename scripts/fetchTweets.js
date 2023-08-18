let tweets = undefined;

async function fetchTweets() {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let userId = params.get("userId");

    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/tweets' + (userId !== null ? '?owner_id=eq.' + userId : '?select=*');

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    return tweets = jsonResponse;
}
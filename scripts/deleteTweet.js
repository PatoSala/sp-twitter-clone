async function deleteTweet(tweetId) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/twitts?id=eq.' + tweetId;

    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey,
        }
    });

    if (response.status > 200) {
        document.querySelector(`#${tweetId}`).style.display = 'none';
    }
}
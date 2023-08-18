
window.addEventListener('load', (e) => {
    if (document.querySelector('.tweet-owner-bubble') != undefined) {
        document.querySelector('.tweet-owner-bubble').innerHTML = `<img src="${session.avatar_url}" width="100%"/>`
    }
})

async function createTweet() {
    let tweetContent = document.querySelector('.text-field');

    if (tweetContent.value === undefined) {
        console.log('Error, value is undefined');
    } else if (tweetContent.value === '') {
        tweetContent.style.border = '1px solid red'
    } else {
        let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/tweets';


        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer' + apiKey,
                apiKey: apiKey
            },
            body: JSON.stringify([{
                owner_id: session.user_id,
                body: tweetContent.value
            }])
        });

        tweetContent.value = '';    // empty textarea value

        if (response.status === 201) {
            if (location.href.includes("index.html")) {
                dialog.close();
                // fecthusers
                await fetchAllUsers();
                // fetch tweets
                await fetchTweets();
                // fetch likes relations
                await fetchLikes();
                // re render tweets
                renderTweets(tweets, users);
            } else {
                location.href = "../index.html"
            }
        }
    }
}

window.addEventListener('load', (e) => {
    if (document.querySelector('.tweet-owner-bubble') != undefined) {
        document.querySelector('.tweet-owner-bubble').innerHTML = `<img src="${session.avatar_url}" width="100%"/>`
    }
})

async function createTweet() {
    let tweetContent = document.querySelector('.text-field');
    console.log(tweetContent.value);

    if (tweetContent.value === undefined) {
        console.log('Error, value is undefined');
    } else {
        console.log(tweetContent.value);
        let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/twitts';


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

        console.log(response);
        if (response.status === 201) {
            if (location.href.includes("index.html")) {
                dialog.close();
                reloadTweets();
            } else {
                location.href = "../index.html"
            }
        }
    }
}
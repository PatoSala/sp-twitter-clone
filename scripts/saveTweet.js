async function saveTweet(tweetId) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/savedPosts';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            user_id: session.user_id,
            tweet_id: tweetId
        })
    });

    console.log(response);
}

async function unsaveTweet(tweetId) {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/savedPosts?tweet_id=eq.${tweetId}&user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        }
    });

    console.log(response);
}

async function handleSaveTweetBtnPress(htmlElement) {
    let tweetId = htmlElement.id.replace('tweetId-', '');
    console.log(tweetId);
    if (session !== null) {

        // if post is already saved,
        if (htmlElement.classList.contains('saved')) {
            // visually update
            htmlElement.children[0].children[0].classList.replace('fa-solid', 'fa-regular');
            htmlElement.classList.remove('saved');

            // remove post from savedPosts table
            unsaveTweet(tweetId);
        } else {
            // visually update
            htmlElement.children[0].children[0].classList.replace('fa-regular', 'fa-solid');
            htmlElement.classList.add('saved');

            // add post to savedPosts table
            saveTweet(tweetId);
        }
    }
}
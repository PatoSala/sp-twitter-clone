
async function fetchTweetOwner(tweetId, ownerId) {
    let url = "https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq." + ownerId;
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();

    let tweet = document.querySelector(`#d${tweetId}`);
    tweet.children[1].children[0].innerText = jsonResponse[0].username;
    tweet.children[0].children[0].innerHTML = `<img src="${jsonResponse[0].avatar_url}" width="100%"/>`

}

function composeTwittItem(tweet) {

    return (
        `
            <div class="tweet-container" id="d${tweet.id}">
                <a href="./views/profile.html?userId=${tweet.owner_id}">
                    <div class="tweet-owner-bubble">
                    </div>
                </a>
                <div class="tweet-content">
                    <h4 class="tweet-owner"></h4>
                    <p class="tweet-body">${tweet.body}</p>
                    <div class="tweet-actions">
                        <ul>
                            <li class="tweet-likes liked">
                                <i class="fa-solid fa-heart fa-lg"></i>
                                ${tweet.likes}k
                            </li>

                            <li>
                                <i class="fa-regular fa-bookmark fa-lg"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    )
}

async function reloadTweets() {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let userId = params.get("userId");
    let tweetsList = document.querySelector('.tweets-list');
    tweetsList.innerHTML = ""

    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/twitts' + (userId !== null ? '?owner_id=eq.' + userId : '?select=*');

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    
    if (jsonResponse.length > 0) {

        let reversedArray = jsonResponse.reverse();

        for (let i = 0; i < reversedArray.length; i++) {
            tweetsList.innerHTML = tweetsList.innerHTML + composeTwittItem(reversedArray[i]);
            fetchTweetOwner(reversedArray[i].id, reversedArray[i].owner_id);

        }
    }
}

async function fetchTwitts() {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let userId = params.get("userId");

    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/twitts' + (userId !== null ? '?owner_id=eq.' + userId : '?select=*');

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });

    let jsonResponse = await response.json();
    
    if (jsonResponse.length > 0) {
        document.querySelector('.spinner').style.display = 'none';

        let tweetsList = document.querySelector('.tweets-list');

        let reversedArray = jsonResponse.reverse();

        for (let i = 0; i < reversedArray.length; i++) {
            tweetsList.innerHTML = tweetsList.innerHTML + composeTwittItem(reversedArray[i]);
            fetchTweetOwner(reversedArray[i].id, reversedArray[i].owner_id);

        }
    }
}

window.addEventListener('load', e => {
    fetchTwitts();
});
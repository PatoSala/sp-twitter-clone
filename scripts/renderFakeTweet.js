let tweetsList = document.querySelector(".tweets-list");

function renderFakeTweet(fakeTweet) {
    return tweetsList.innerHTML = tweetsList.innerHTML + tweetItemComponent(fakeTweet);
}
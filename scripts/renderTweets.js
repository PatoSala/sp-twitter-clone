let tweetsList = document.querySelector(".tweets-list");
let spinner = document.querySelector(".spinner");

function renderTweets(tweets, users, onlyLikedPosts = false, onlySavedPosts = false) {
    console.log('rendering!');
    let array = []; 
    
    for (let i = 0; i < tweets.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (tweets[i].owner_id === users[j].user_id) {
                let formattedTweet = tweets[i];
                formattedTweet.owner_metadata = {
                    username: users[j].username,
                    avatar_url: users[j].avatar_url,
                    verified: users[j].verified
                } 
                array.unshift(formattedTweet);
            }
        }
    }

    spinner.style.display = 'none';

    tweetsList.innerHTML = ``   // clean innerHtml

    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            let isLiked = false;
            let isSaved = false;

            if (session !== null) {

                // match liked posts
                for (let j = 0; j < likes.length; j++) {
                    if (likes[j].tweet_id === array[i].id && likes[j].user_id === session.user_id) {
                        isLiked = true;
                    }
                }

                // match savedPosts
                for (let j = 0; j < savedPosts.length; j++) {
                    if (savedPosts[j].tweet_id === array[i].id && savedPosts[j].user_id === session.user_id) {
                        isSaved = true;
                    }
                }
            }

            if (onlyLikedPosts) {
                if (isLiked) {
                    tweetsList.innerHTML = tweetsList.innerHTML + tweetItemComponent(array[i], isLiked, isSaved);
                }
            }
            else if (onlySavedPosts) {
                if (isSaved) {
                    tweetsList.innerHTML = tweetsList.innerHTML + tweetItemComponent(array[i], isLiked, isSaved);
                }
            }
            else {
                tweetsList.innerHTML = tweetsList.innerHTML + tweetItemComponent(array[i], isLiked, isSaved);
            }
        }
    } else {
        tweetsList.innerHTML = `<p style="align-self: center">No se encontraron tweets</p>`
    }

}
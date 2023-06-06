let tweetsList = document.querySelector(".tweets-list");
let spinner = document.querySelector(".spinner");

function renderTweets(tweets, users) {
    let array = []; 
    
    for (let i = 0; i < tweets.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (tweets[i].owner_id === users[j].user_id) {
                let formattedTweet = tweets[i];
                formattedTweet.owner_metadata = {
                    username: users[j].username,
                    avatar_url: users[j].avatar_url
                } 
                array.unshift(formattedTweet);
            }
        }
    }

    console.log(array);

    spinner.style.display = 'none';

    tweetsList.innerHTML = ``   // clean innerHtml

    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            let isLiked = false;

            if (session !== null) {
                for (let j = 0; j < likes.length; j++) {
                    if (likes[j].tweet_id === array[i].id && likes[j].user_id === session.user_id) {
                        isLiked = true;
                    }
                }
            }

            tweetsList.innerHTML = tweetsList.innerHTML + tweetItemComponent(array[i], isLiked);
        }
    } else {
        tweetsList.innerHTML = `<p style="align-self: center">No se encontraron tweets</p>`
    }

}
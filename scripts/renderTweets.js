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

    for (let i = 0; i < array.length; i++) {
        tweetsList.innerHTML = tweetsList.innerHTML + tweetItemComponent(array[i]);
    }

}
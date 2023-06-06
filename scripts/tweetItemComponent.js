function tweetItemComponent(tweet, isLiked) {

    return (
        `
            <div class="tweet-container">
                <a href="./views/profile.html?userId=${tweet.owner_id}">
                    <div class="tweet-owner-bubble">
                        <img src="${tweet.owner_metadata.avatar_url}" width="100%"/>
                    </div>
                </a>
                <div class="tweet-content">
                    <h4 class="tweet-owner">${tweet.owner_metadata.username}</h4>
                    <p class="tweet-body">${tweet.body}</p>
                    <div class="tweet-actions">
                        <ul>
                            <li class="tweet-likes ${isLiked ? 'liked' : ''}" id="tweetId-${tweet.id}" onclick="likeTweet(this)">
                                <div class="icon-container" style="width: 34.75px; height: 34.75px; position: absolute; display: flex; align-items: center; justify-content: center">
                                    <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart fa-lg"></i>
                                </div>
                                <p style="position: relative; left: 25px; font-size: 13px; margin: 0">${tweet.likes}</p>
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
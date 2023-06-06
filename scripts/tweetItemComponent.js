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
                                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart fa-lg"></i>
                                <p style="margin: 0; padding: 0; margin-left: 15px; font-size: 13px">${tweet.likes}</p>
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
function tweetItemComponent(tweet) {

    return (
        `
            <div class="tweet-container" id="d${tweet.id}">
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
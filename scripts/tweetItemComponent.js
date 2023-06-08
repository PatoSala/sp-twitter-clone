function openDropDownMenu(element) {
    console.log(window.event, element);
    if (e.target === element) {
        element.children[1].classList.replace("closed", "open");
        element.children[2].classList.replace("closed", "open");
    }
}

function closeDropDownMenu(element) {
    element.children[1].classList.replace("open", "closed");
    element.children[2].classList.replace("open", "closed");
    element.classList.remove("disabled");
}

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
                    <h4 class="tweet-owner">${tweet.owner_metadata.username} <span class="creation-date">${tweet.created_at.slice(0, 10)}</span></h4>
                    <p class="tweet-body">${tweet.body}</p>
                    <div class="tweet-actions">
                        <ul>
                            <li class="like-btn ${isLiked ? 'liked' : ''}" id="tweetId-${tweet.id}" onclick="likeTweet(this)">
                                <div class="icon-container">
                                    <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart fa-lg"></i>
                                </div>
                                <p style="position: relative; left: 25px; font-size: 13px; margin: 0; display: ${tweet.likes > 0 ? 'inline' : 'none'}">${tweet.likes}</p>
                            </li>

                            <li>
                                <i class="fa-regular fa-bookmark fa-lg"></i>
                            </li>
                        </ul>
                    </div>

                    <div class="options-btn" onclick="openDropDownMenu(this)">
                        <i class="fa-solid fa-ellipsis fa-sm"></i>

                        <span class="options-btn-drop-menu closed">
                            <div class="drop-down-item">
                                <svg class="drop-down-icon" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path></g></svg>
                                <span>Denunciar el tweet<span>
                            <div>
                        </span>
                    </div>

                    <span class="drop-down-container closed" onclick="closeDropDownMenu(this.parentNode)"></span>

                </div>
            </div>
        `
    )
}
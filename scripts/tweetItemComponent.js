function openDropDownMenu(element) {
    console.log(element.children);
    element.children[1].classList.replace('closed', 'open');
    console.log(element.parentNode.children);
    element.parentNode.children[3].classList.replace('closed', 'open');
}

function closeDropDownMenu(element) {
    element.classList.replace('open', 'closed');
    let dropDown = document.querySelector('.drop-down-menu.open');
    dropDown.classList.replace('open', 'closed');
    console.log(dropDown);
}

async function deleteTweet(element) {
    let tweetId = element.id.replace('tweetId-', '');
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/tweets?id=eq.' + tweetId;

    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey,
        }
    });

    if (response.status > 200) {
        element.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    }
}

let twitterBlueCheck = `<svg style="width: 18.75px" class="twitter-check-sm" viewBox="0 0 22 22" aria-label="Cuenta verificada" role="img" data-testid="icon-verified"><g><path fill="rgb(29, 155, 240)" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg> `


function tweetItemComponent(tweet, isLiked, isSaved = false) {

    function belongsToSessionUser(test) {
        if (session !== null && test === session.user_id) {
            return true;
        } else {
            return false;
        }
    }

    return (
        `
            <div class="tweet-container ${tweet.strikes === 3 ? 'hidden' : ''}" id="tweetId-${tweet.id}">
                <a href="${location.href.includes('views') ? './' : './views/'}profile.html?userId=${tweet.owner_id}">
                    <div class="tweet-owner-bubble">
                        <img src="${tweet.owner_metadata.avatar_url}" width="100%"/>
                    </div>
                </a>
                <div class="tweet-content">
                    <div class="tweet-header">
                        <a class="tweet-owner" href="${location.href.includes('views') ? './' : './views/'}profile.html?userId=${tweet.owner_id}">
                            <h4>${tweet.owner_metadata.username}</h4>
                        </a>
                        <span class="twitter-blue-check">${tweet.owner_metadata.verified ? twitterBlueCheck : ``}</span>
                        <span class="creation-date">${tweet.created_at.slice(0, 10)}</span>
                    </div>
                    <p class="tweet-body">${tweet.body}</p>
                    <div class="tweet-actions">
                        <ul>
                            <li class="like-btn ${isLiked ? 'liked' : ''}" id="tweetId-${tweet.id}" onclick="likeTweet(this)">
                                <div class="icon-container">
                                    <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart fa-lg"></i>
                                </div>
                                <p style="position: relative; left: 25px; font-size: 13px; margin: 0; display: ${tweet.likes > 0 ? 'inline' : 'none'}">${tweet.likes}</p>
                            </li>

                            <li class="save-btn ${isSaved ? 'saved' : ''}" id="tweetId-${tweet.id}" onclick="handleSaveTweetBtnPress(this)">
                                <div class="icon-container">
                                    <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark fa-lg"></i>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <span class="drop-down-backdrop closed" onclick="closeDropDownMenu(this)"></span>

                    <div class="options-btn" onclick="openDropDownMenu(this)">
                        <i class="fa-solid fa-ellipsis fa-sm"></i>

                        <span class="drop-down-menu closed">

                            ${
                                belongsToSessionUser(tweet.owner_id) ? (
                                    `
                                    <div class="drop-down-item" style="color: rgb(244, 33, 46)" id="tweetId-${tweet.id}" onclick="deleteTweet(this)">
                                        <svg class="drop-down-icon" viewBox="0 0 24 24" aria-hidden="true" ><g><path fill="rgb(244, 33, 46)" d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path></g></svg>
                                        <span>Eliminar<span>
                                    </div>
                                    `
                                ) : ``
                            }

                            <div class="drop-down-item">
                                <svg class="drop-down-icon" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path></g></svg>
                                <span>Denunciar el Tweet<span>
                            <div>
                        </span>
                    </div>

                </div>
            </div>
        `
    )
}
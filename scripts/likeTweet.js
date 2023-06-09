
async function addLikeRelation(tweetId) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/likes';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            tweet_id: tweetId,
            user_id: session.user_id
        })
    });

    console.log(response);
}

async function removeLikeRelation(tweetId) {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/likes?tweet_id=eq.${tweetId}&user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        }
    });

    console.log(response);
}

async function updateLikes(tweetId, totalLikes) {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/twitts?id=eq.${tweetId}`;

    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        },
        body: JSON.stringify({
            "likes": totalLikes
        })
    })
    console.log(response);
}

function likeTweet(htmlElement) {
    let tweetId = htmlElement.id.replace('tweetId-', '');
    let totalLikes = parseInt(htmlElement.children[1].innerText);
    
    let likeBtn = document.querySelector(`#${htmlElement.id}`)
    
    if (session !== null) {
        if (htmlElement.classList.contains('liked')) {

            // visually update
            htmlElement.children[0].children[0].classList.replace('fa-solid', 'fa-regular');
            htmlElement.children[1].innerText = (totalLikes - 1).toString();
            htmlElement.classList.remove('liked');
            if ((totalLikes - 1) == 0) {
                htmlElement.children[1].style.display = 'none'
            }
    
            // update total likes at tweets table
            updateLikes(tweetId, totalLikes - 1);
            removeLikeRelation(tweetId);
            // update likes table
        } else {
            htmlElement.children[0].children[0].classList.replace('fa-regular', 'fa-solid');
            htmlElement.children[1].innerText = (totalLikes + 1).toString();
            htmlElement.classList.add('liked');
            if ((totalLikes + 1) > 0) {
                htmlElement.children[1].style.display = 'inline'
            }

            updateLikes(tweetId, totalLikes + 1);
            addLikeRelation(tweetId);
            
        }
    }
    
}
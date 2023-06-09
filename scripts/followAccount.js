// update followers_count column at a users record
async function updateFollowersCount(userId, totalFollowers) {
    let url = "https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq." + userId;

    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            followers_count: totalFollowers
        })
    });
    console.log(response);
    return response;
}

async function addFollowRelation(follower_id, followee_id) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/followers';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            follower_id: follower_id, 
            followee_id: followee_id
        })
    })
    return response;
}

async function removeFollowRelation(follower_id, followee_id) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/followers?follower_id=eq.' + follower_id + '&followee_id=eq.' + followee_id;

    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        }
    })
    return response;
}
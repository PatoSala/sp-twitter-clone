let editProfileDialog = document.querySelector('.edit-profile-dialog');

let editProfileBtn = document.querySelector('.edit-profile-btn');
let closeEditProfileBtn = document.querySelector('.close-btn');

let editBannerContainer = document.querySelector('.edit-banner-container');
let editAvatarContainer = document.querySelector('.edit-profile-avatar');
let editUsername = document.querySelector('#username');
let editBio = document.querySelector('#bio');

let bannerPic = session.banner_url;
let avatarPic = session.avatar_url;
let username = session.username;
let bio = session.bio;

async function updateAvatarUrl(avatarUrl) {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            avatar_url: avatarUrl
        })
    })
    return response;
}

async function updateBannerUrl(bannerUrl) {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            banner_url: bannerUrl
        })
    })
    return response;
}

async function uploadNewAvatarPicure() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/avatars/${session.user_id}`;

    let formData = new FormData();
    formData.append('', avatarPic, `public/${session.user_id}`);

    console.log(avatarPic);

    let response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Cache-Control': `max-age=0`,
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: formData
    })
    console.log(response);
    if (response.status === 200) {
        let newUrl = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/public/avatars/${session.user_id}`;
        await updateAvatarUrl(newUrl);
    }
}

async function uploadNewBannerPicure() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/banners/${session.user_id}`;

    let formData = new FormData();
    formData.append('', bannerPic, `public/${session.user_id}`);

    console.log(bannerPic);

    let response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Cache-Control': `max-age=0`,
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: formData
    })
    console.log(response);
    if (response.status === 200) {
        let newUrl = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/public/banners/${session.user_id}`;
        await updateBannerUrl(newUrl);
    }
}

async function updateUsername() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            username: editUsername.value
        })
    })
    console.log('USERNAME', response);
}

async function updateBio() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`;

    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            bio: editBio.value
        })
    })
    console.log('BIO', response);
}


async function saveChanges() {
    await updateUsername();
    await updateBio();
    await uploadNewAvatarPicure();
    await uploadNewBannerPicure();
    location.reload();
}


function selectNewAvatarPicture(input) {
    avatarPic = input.files[0];

    let reader = new FileReader();
    reader.onload = (e) => {
        editAvatarContainer.style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(input.files[0]);

}

function selectNewBannerPicture(input) {
    bannerPic = input.files[0];

    let reader = new FileReader();
    reader.onload = (e) => {
        editBannerContainer.style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(input.files[0]);
}

let openEditProfileDialog = () => {
    editProfileDialog.showModal(); 
    editBannerContainer.style.backgroundImage = `url(${bannerPic})`;
    editAvatarContainer.style.backgroundImage = `url(${avatarPic})`;
    editUsername.value = userData[0].username;
    editBio.value = userData[0].bio;
}

let closeEditProfileDialog = () => {
    editProfileDialog.close();
}


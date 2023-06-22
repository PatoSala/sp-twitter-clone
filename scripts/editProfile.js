let editProfileDialog = document.querySelector('.edit-profile-dialog');

let editProfileBtn = document.querySelector('.edit-profile-btn');
let closeEditProfileBtn = document.querySelector('.close-btn');

let editBannerContainer = document.querySelector('.edit-banner-container');
let editAvatarContainer = document.querySelector('.edit-profile-avatar');
let editUsername = document.querySelector('#username');
let editBio = document.querySelector('#bio');

let bannerUrl = session.banner_url;
let avatarUrl = session.avatar_url;
let username = session.username;
let bio = session.bio;

async function uploadNewAvatarPicure() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/avatars/${session.user_id}`;

    let formData = new FormData();
    formData.append('', avatarUrl, session.user_id);

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: formData
    })
    console.log(response)
}

async function uploadNewBannerPicure() {
    let url = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/banners/${session.user_id}`;

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            path: bannerUrl
        })
    })
    console.log(response)
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
    /* uploadNewAvatarPicure();
    uploadNewBannerPicure(); */
    location.reload();
}


function selectNewAvatarPicture(input) {
    avatarUrl = input.files[0];
    console.log(avatarUrl);

    let reader = new FileReader();
    reader.onload = (e) => {
        editAvatarContainer.style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(input.files[0]);

}

function selectNewBannerPicture(input) {
    let reader = new FileReader();

    reader.onload = (e) => {
        editBannerContainer.style.backgroundImage = `url(${e.target.result})`;
        bannerUrl = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}

let openEditProfileDialog = () => {
    editProfileDialog.showModal(); 
    editBannerContainer.style.backgroundImage = `url(${bannerUrl})`;
    editAvatarContainer.style.backgroundImage = `url(${avatarUrl})`;
    editUsername.value = userData[0].username;
    editBio.value = userData[0].bio;
}

let closeEditProfileDialog = () => {
    editProfileDialog.close();
}


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

let openEditProfileDialog = () => {
    editProfileDialog.showModal();
    editBannerContainer.style.backgroundImage = `url(${bannerUrl})`;
    editAvatarContainer.style.backgroundImage = `url(${avatarUrl})`;
    editUsername.value = username;
    editBio.value = bio;
}

let closeEditProfileDialog = () => {
    editProfileDialog.close();
}


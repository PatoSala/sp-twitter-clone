let editProfileDialog = document.querySelector('.edit-profile-dialog');


let editProfileBtn = document.querySelector('.edit-profile-btn');
let closeEditProfileBtn = document.querySelector('.close-btn');

let editBannerContainer = document.querySelector('.edit-banner-container');
let editAvatarContainer = document.querySelector('.edit-profile-avatar');

let openEditProfileDialog = () => {
    editProfileDialog.showModal();
    editBannerContainer.style.backgroundImage = `url(${session.banner_url})`;
    editAvatarContainer.style.backgroundImage = `url(${session.avatar_url})`;
}

let closeEditProfileDialog = () => {
    editProfileDialog.close();
}
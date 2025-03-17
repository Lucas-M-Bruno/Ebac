const url = "https://api.github.com/users/Lucas-M-Bruno";
const profileImg = document.getElementById('image-profile');
const profileName = document.getElementById('name');
const profileUsername = document.getElementById('username');
const repositories = document.getElementById('repositories');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const link = document.getElementById('link');


fetch(url)
.then((resp) => resp.json())
.then((dados) => {

    profileImg.src = dados.avatar_url;
     profileName.innerText = dados.name;
     profileUsername.innerHTML = dados.login;
     repositories.innerText = dados.public_repos;
     followers.innerText = dados.followers;
     following.innerText = dados.following;
     link.href = dados.html_url;
})
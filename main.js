$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/cfasan';
    const profileAvatar = $('#avatar');
    const profileName = $('#name');
    const profileUserName = $('#username');
    const repositories = $('#repositories');
    const followers = $('#followers');
    const following = $('#following');
    const profileLink = $('#user-link');


    fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        }).then(function(json){
            profileAvatar.src = json.avatar_url;
            profileName.innerText = json.name;
            profileUserName.innerText = json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            profileLink.href = json.html_url;
        });
});
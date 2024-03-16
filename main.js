$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/cfasan';
    const profileAvatar = $('#avatar');
    const profileName = $('#name');
    const profileUserName = $('#username');
    const repositories = $('#repositories');
    const followers = $('#followers');
    const following = $('#following');
    const profileLink = $('#user-link');

    try{
        $.ajax(endpoint).done(function(resposta){
            profileAvatar.attr('src', resposta.avatar_url);
            profileName.text(resposta.name);
            profileUserName.text(resposta.login);
            repositories.text(resposta.public_repos);
            followers.text(resposta.followers);
            following.text(resposta.following);
            profileLink.attr('href', resposta.html_url);
        });
    }catch {
        console.log('Ocorreu um erro. POr favor, tente novamente.');
    };
});

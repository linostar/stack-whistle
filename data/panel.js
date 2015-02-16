/*$(function(){
SE.init({ 
    clientId: 4267, 
    key: '8p1pDgmKlR6m6hUn80n21Q((', 
    //channelUrl: 'https://api.stackexchange.com/docs/proxy',
    channelUrl: 'resource://jid1-BfhSBFoRBQ3eIg-at-jetpack/stack-whistle/data/blank.html',
    complete: function(data) { 
        $('#login-button')
            .removeAttr('disabled')
    }
});

$('#login-button').click(function() {
    SE.authenticate({
        success: function(data) { 
            console.log(
                'User Authorized with account id = ' + 
                data.networkUsers[0].account_id + ', got access token = ' + 
                data.accessToken
            ); 
            $('#login-button').attr('disabled', true);
        },
        error: function(data) { 
            console.log('An error occurred:\n' + data.errorName + '\n' + data.errorMessage); 
            $('#login-button').text('login with error');
        },
        networkUsers: true
    });
});
});*/

$(document).ready(function() {
    var clientId = 4267;
    var scope = 'read_inbox,private_info,no_expiry';
    var channelUrl = 'https://stackexchange.com/oauth/login_success';
    var intervalId = 0;
    function authenticate() {
        var authWindow = window.open('https://stackexchange.com/oauth/dialog?client_id=' + clientId
                   + '&scope=' + scope + '&redirect_uri=' + channelUrl, '_blank', 'width=640,height=400,menubar=no,toolbar=no,location=yes,status=no');
        /*var authParent = authWindow.parent;
        intervalId = setInterval(function() {
            var url_string = authParent.window.location.href;
            if (url_string.match(channelUrl)) {
                console.log('auth window closed!');
            }
        }, 1000);*/
    }
    $('#login-button').removeAttr('disabled').click(authenticate);
});
/*1*/
$(document).ready(function(){
    var sentence = 'Hello, My name is Adrian Thomas and I have friends.';
    $('#first').append('<button id="created-button">Click Me!</button>');
    $('#created-button').on('click', function(){
        alert('Hello, how are you?');
    });
    /*2*/
    $('#text-button').on('click', function(){
        console.log($('#text-box'));
        $('#text-box').val('Don\'t touch me!');
    });
    /*3*/
    $('#mouse-colors').on('mouseover', function(){
        $('#mouse-colors').css('backgroundColor', 'green');
    });
    $('#mouse-colors').on('mouseleave', function(){
        $('#mouse-colors').css('backgroundColor', 'yellow');
    });
    /*4*/
    $('#random-color-text').on('click', function(){
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('#random-color-text').css('color', hue);        
    });
    /*5*/
    $('#span-button').on('click', function(){
    $('#add-span').append('<span>Adrian Thomas</span>');  
    });
    /*6*/
        var friends = ['Tyler', 'Dylan', 'JB', 'Carlton', 'Justin', 'Chance'
        , 'Wayne H', 'Wayen B', 'Justin', 'Chris'];
    $('#friends-button').on('click', function(){
        for(var i = 0; i < friends.length; i++){
            $('#friends-ul').append('<li class="friends-li">'+friends[i]+'<li>');
        }
    });
    /*7*/
    $('#change-name').on('click', function(){
        var sentenceSplit = sentence.split(' ');
        $(sentenceSplit).each(function(i){
                $('.friends-li').replaceWith(sentenceSplit);
        });
    });
});
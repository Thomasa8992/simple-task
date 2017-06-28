var sentence = 'Hello, My name is Adrian Thomas and I have friends.';
   
    /*1*/ 
document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement('button');
    var first = document.querySelector('#first');
    first.appendChild(button);
    button.innerText = 'click me!';
    button.addEventListener('click', function(){
        alert('Hello, How Are You?');
    });  
    /*2*/ 
    var textBox = document.querySelector('#text-box');
    var textButton = document.querySelector('#text-button');
    textButton.addEventListener('click', function(){
        // alert();
        // textBox.innerText = ('after clicking');
        textBox.value = 'Don\'t Touch Me';
        // console.log(textBox);
    });
    /*3*/ 
    var mouseColors = document.querySelector('#mouse-colors');
    mouseColors.addEventListener('mouseover', function(){
        mouseColors.style.backgroundColor = 'green';
    });
    mouseColors.addEventListener('mouseleave', function(){
        mouseColors.style.backgroundColor = 'yellow';
    });
    /*4*/ 
    var randomColorText = document.querySelector('#random-color-text');
    randomColorText.addEventListener('click', function(){
       var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        randomColorText.style.color = hue;
    });
    /*5*/
    var addSpan = document.querySelector('#add-span');
    var buttonSpan = document.querySelector('#span-button');
    buttonSpan.addEventListener('click', function(){
        var spanName = document.createElement('span');
        addSpan.appendChild(spanName);
        spanName.innerText = 'Adrian Thomas';
    });
    /*6*/
    var friendsUl = document.querySelector('#friends-ul');
    var friendsButton = document.querySelector('#friends-button');
    var friends = ['Tyler', 'Dylan', 'JB', 'Carlton', 'Justin', 'Chance'
        , 'Wayne H', 'Wayen B', 'Justin', 'Chris'];
    friendsButton.addEventListener('click', function(){
        for(var i = 0; i < friends.length; i++){
                var lis = document.createElement('li');
                
                friendsUl.appendChild(lis);
                lis.innerHTML = friends[i];
        }
  });
    /*7*/
    var changeNames = document.querySelector('#change-name');
    changeNames.addEventListener('click', function(){
       var newLi = document.querySelector('li');
       var sentenceSpilt = sentence.split(' ');
       for(var i = 0; i <sentenceSpilt.length; i++){
           newli.appendChild(sentenceSpilt);
        
       }
          
  
    });
});
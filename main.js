
let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');
document.onmousemove = function(e){

    cursor.style.top = e.pageY +'px';
    cursor.style.left = e.pageX + 'px'

    body.style.backgroundPositionX = e.pageX/-4 + 'px';
    body.style.backgroundPositionY = e.pageY/-4 + 'px';

    let element = document.createElement('div');
    element.className = 'element';
    body.prepend(element);

    element.style.left = cursor.getBoundingClientRect().x + 'px';
    element.style.top = cursor.getBoundingClientRect().y - 10 + 'px';

    setTimeout(function(){
        let text = document.querySelectorAll('.element')[0],
        directionX = Math.random() < .5 ? -1 : 1,
        directionY = Math.random() < .5 ? -1 : 1

        text.style.left = parseInt(text.style.left) - (directionX 
        * (Math.random() * 200)) + 'px';
        text.style.top = parseInt(text.style.top) - (directionY 
         * (Math.random() * 200)) + 'px';
                text.style.opacity = 0;
                text.style.transform = 'scale(0.25)';

            setTimeout(function(){
                element.remove()
            }, 500)
    },10)
}

function typeHTML(element, delay) {
    var html = element.innerHTML;
    element.innerHTML = ''; 
    var i = 0;
    var typingInterval = setInterval(function() {
        element.innerHTML += html.charAt(i); 
        if (html.charAt(i) === '<') {
            var endIndex = html.indexOf('>', i) + 1;
            element.innerHTML += html.slice(i + 1, endIndex);
            i = endIndex;
        } else {
            i++;
        }
        if (i >= html.length) {
            clearInterval(typingInterval); 
        }
    }, delay);
}

function typeHTMLLoop(element, delay) {
    var html = element.innerHTML;
    element.innerHTML = ''; 
    var i = 0;
    
    function type() {
        var typingInterval = setInterval(function() {
            element.innerHTML += html.charAt(i); 
            
            if (html.charAt(i) === '<') {
                var endIndex = html.indexOf('>', i) + 1;
                element.innerHTML += html.slice(i + 1, endIndex);
                i = endIndex;
            } else {
                i++;
            }
            
            if (i >= html.length) {
                clearInterval(typingInterval);
                setTimeout(function() {
                    element.innerHTML = ''; 
                    i = 0; 
                    type(); 
                }, 500); 
            }
        }, delay);
    }
    
    type(); 
}

window.onload = function() {
    var textElement = document.getElementById("description");
    typeHTML(textElement, 100);
};

function redirectToWebsite() {
    window.location.href = "SelectName.html";
}


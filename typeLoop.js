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
                    element.innerHTML = ''; // Clear the element's content after typing
                    i = 0; // Reset the index for the next loop
                    type(); // Start typing again
                }, 500); // Wait for 2 seconds before clearing the content and restarting
            }
        }, delay);
    }
    
    type(); // Start typing
}

window.onload = function() {
    var textElement = document.getElementById('descriptionLoop');
    typeHTMLLoop(textElement, 100); 
};
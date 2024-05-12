document.addEventListener("DOMContentLoaded", function() {
    // Sample names array
    var names = ["Guest", "Yasser Abdulrahman", "Jessel Ann Balbastro", "Nolan Ajman Bendulo", "Jhianne Jose Berida", "Rameses Bernabe", "Reynaldo Buscagan Jr.", "Raven John Canedo", "Rona Jane Condiman", 
    "Javier Luke Cordero", "Ivan Dilangalen", "Prince Zachary Ducog", "Ivan Josh Dumadapat", "Fhiona Escurzon", "Jhon Maynard Felias", "Lady Heart Fernando", "Jan-rel Francisco", 
    "Andre Laurence Geraga", "John Lloyd Girozaga", "Carl Patrick Guadalquiver", "Charlize Jane Inday", "Eyzel Anne Initan", "Marianne Faye Libre", 
    "Mark Khean Lumapas", "Kj Lupogan", "Ashlee Nicole Lustre", "John Lloyd Majarucon", "Joseph Benedict Masaya", "Alexander Melecio", "Harold John Naquila", "Ryan Pabiran", "John Rex Partoza", 
    "Red Xavier Rodrigo", "Rodelou Rosa", "Dency Samson", "Jedrick Saniel", "Krystuff Sam Tabaosares", "Miguel Tayao", "Benz Carl Vale"];
    
    // Get the select element
    var selectElement = document.getElementById("nameInput");
    
    // Populate the select element with options
    names.forEach(function(name) {
        var option = document.createElement("option");
        option.value = name;
        option.text = name;
        selectElement.appendChild(option);
    });

    // Proceed button click event
    document.getElementById("proceed").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission for this example
    
        var selectedName = selectElement.value;
        console.log("Selected name:", selectedName);

        // Store the selected name in localStorage
        localStorage.setItem("selectedName", selectedName);
        
        // Navigate to third.html
        window.location.href = "Home.html";
    });
});

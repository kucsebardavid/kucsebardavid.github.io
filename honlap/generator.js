function generator() {
    // word lists
    var firstPart = ["Tom Brady", "Patrick Mahomes", "Russel Wilson", "Drew Brees", "Lamar Jackson", "Aaron Rodgers", "Matt Ryan", "Deshaun Watson", "Jimmy Garoppolo", "Philip Rivers", "Carson Wentz", "Kirk Cousins", "Matthew Stafford", "Dak Prescott", "Ben Roethlisberger", "Derek Carr", "Ryan Tannehill", "Cam Newton", "Jameis Winston", "Josh Allen"];
    // generate name
    var name = firstPart[Math.floor(Math.random() * firstPart.length)];
    //alert(name);
    // remove name div if existing
    if (document.getElementById("name")) {
    document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }
    // append to placeholder div
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
    }
var states = [
    "california", "newyork", "illinois", "washington", "ohio", "pennsylvania",
    "michigan", "wyoming", "alabama", "alaska", "arizona", "arkansas",
    "colorado", "connecticut", "delaware", "hawaii", "idaho", "indiana",
    "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland",
    "massachusetts", "minnesota", "mississippi", "missouri", "montana",
    "nebraska", "nevada", "newhampshire", "newjersey", "newmexico",
    "northcarolina", "northdakota", "oklahoma", "oregon", "southcarolina",
    "tennessee", "utah", "vermont", "virginia", "westvirginia", "wisconsin",
    "rhodeisland", "texas", "florida", "georgia", "southdakota"
];

states.forEach(function(state){
    var pin = $("." + state);
    var info = $("." + state + "Info");
    pin.on("mouseover", function(event){
        event.preventDefault();
        info.toggleClass("hidden");
    });

    pin.on("mouseout", function(event){
        event.preventDefault();
        info.toggleClass("hidden");
    });
});
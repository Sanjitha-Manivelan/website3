var georgiaPin = $(".georgia");
var georgiaInfo = $(".georgiaInfo");

georgiaPin.on("mouseover", displayInfo);
georgiaPin.on("mouseout", displayInfo);

function displayInfo(event){
    event.preventDefault();
    georgiaInfo.toggleClass("hidden");
}


var texasPin = $(".texas");
var texasInfo = $(".texasInfo");

texasPin.on("mouseover", displayInfoTexas);
texasPin.on("mouseout", displayInfoTexas);

function displayInfoTexas(event){
    event.preventDefault();
    texasInfo.toggleClass("hidden");
}
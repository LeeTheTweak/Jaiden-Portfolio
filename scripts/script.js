
/** Declaring Variables */
var titleEl = document.getElementById("Title");
var SE_ELEMENT = document.getElementById("SE");

// Getting the nav elements
var Home_NavEl = document.querySelector("#homeLink");
var Portfolio_NavEl = document.querySelector("#portfolioLink");
var Contact_NavEl = document.querySelector("#contactLink");

//For animating the title.
$(document).ready(function(){
    $(titleEl).hide().fadeIn(1500,function(){
        $(this).animate({
            /** Animation Here */
        });
    });
});
function hoverOnNavHome() {
    $(Home_NavEl).animate({
        opacity: 0.5
    });
    Home_NavEl.style.transform = "scale(1.5, 1.5)";
    Home_NavEl.style.fontWeight = "bolder";
}
function outOnNavHome() {
    $(Home_NavEl).animate({
        opacity: 1.0
    });
    Home_NavEl.style.transform = "scale(1)";
    Home_NavEl.style.fontWeight = "none";
}
function hoverOnNavPortfolio() {
    $(Portfolio_NavEl).animate({
        opacity: 0.5
    });
    Portfolio_NavEl.style.transform = "scale(1.5,1.5)";
    Portfolio_NavEl.style.fontWeight = "bolder";
}
function outOnNavPortfolio() {
    $(Portfolio_NavEl).animate({
        opacity: 1.0
    });
    Portfolio_NavEl.style.transform = "scale(1)";
    Portfolio_NavEl.style.fontWeight = "none";
}
function hoverOnNavContact() {
    $(Contact_NavEl).animate({
        opacity: 0.5
    });
    Contact_NavEl.style.transform = "scale(1.5,1.5)";
    Contact_NavEl.style.fontWeight = "bolder";
}
function outOnNavContact() {
    $(Contact_NavEl).animate({
        opacity: 1.0
    });
    Contact_NavEl.style.transform = "scale(1)";
    Contact_NavEl.style.fontWeight = "none";
}
/** Move special words when
 * user hovers mouse over the word.
 * Change it's paddingTop.
 */
function changeWord() {
    $(SE_ELEMENT).animate({
        paddingLeft: 40
    });
}
function changeWordBack() {
    $(SE_ELEMENT).animate({
        paddingLeft: -40
    });
}
/** The Event Listeners */
SE_ELEMENT.addEventListener("mouseover", changeWord,false);
SE_ELEMENT.addEventListener("mouseout",changeWordBack,false);

Home_NavEl.addEventListener("mouseover",hoverOnNavHome,false);
Home_NavEl.addEventListener("mouseout",outOnNavHome,false);

Portfolio_NavEl.addEventListener("mouseover",hoverOnNavPortfolio,false);
Portfolio_NavEl.addEventListener("mouseout",outOnNavPortfolio,false);

Contact_NavEl.addEventListener("mouseover",hoverOnNavContact,false);
Contact_NavEl.addEventListener("mouseout",outOnNavContact,false);

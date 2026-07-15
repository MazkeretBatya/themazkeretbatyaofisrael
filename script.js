// =============================
// Israel Information Portal
// Version 1.0
// =============================

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

}

});

// =============================
// Scroll To Top
// =============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =============================
// Search
// =============================

const searchBtn=document.getElementById("searchBtn");

searchBtn.addEventListener("click",()=>{

let value=document
.getElementById("searchInput")
.value
.toLowerCase();

if(value.includes("knesset")){

document
.getElementById("knesset")
.scrollIntoView({
behavior:"smooth"
});

}

else if(value.includes("mazkeret")){

document
.getElementById("mazkeret")
.scrollIntoView({
behavior:"smooth"
});

}

else if(value.includes("gallery")){

document
.getElementById("gallery")
.scrollIntoView({
behavior:"smooth"
});

}

else if(value.includes("about")){

document
.getElementById("about")
.scrollIntoView({
behavior:"smooth"
});

}

else{

alert("No matching section found.");

}

});

// =============================
// Fade Animation
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});
// =======================
// Language Switch
// =======================

const englishBtn = document.getElementById("englishBtn");
const hebrewBtn = document.getElementById("hebrewBtn");

englishBtn.onclick = () => {

document.documentElement.lang = "en";

document.getElementById("heroTitle").innerHTML =
"Israel Information Portal";

document.getElementById("heroText").innerHTML =
"Explore reliable educational information about Israel, its geography, government, history and selected towns.";

document.getElementById("aboutTitle").innerHTML =
"About Israel";

document.getElementById("knessetTitle").innerHTML =
"Knesset";

document.getElementById("mazTitle").innerHTML =
"Mazkeret Batya";

}

hebrewBtn.onclick = () => {

document.documentElement.lang = "he";

document.getElementById("heroTitle").innerHTML =
"פורטל המידע על ישראל";

document.getElementById("heroText").innerHTML =
"מידע חינוכי על ישראל, הגאוגרפיה שלה, הממשלה, ההיסטוריה ויישובים נבחרים.";

document.getElementById("aboutTitle").innerHTML =
"על ישראל";

document.getElementById("knessetTitle").innerHTML =
"הכנסת";

document.getElementById("mazTitle").innerHTML =
"מזכרת בתיה";

}
// SAAT

const clock = document.getElementById("clock");
const date = document.getElementById("date");


function updateClock(){

    const now = new Date();


    if(clock){

        clock.textContent =
        now.toLocaleTimeString("tr-TR");

    }


    if(date){

        date.textContent =
        now.toLocaleDateString("tr-TR",{

            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"

        });

    }

}


updateClock();

setInterval(updateClock,1000);





// RIPPLE EFFECT

document.querySelectorAll(".glass-btn").forEach(btn=>{


btn.addEventListener("click",function(e){


const ripple=document.createElement("span");


ripple.className="ripple";


const rect=this.getBoundingClientRect();


ripple.style.left =
e.clientX - rect.left + "px";


ripple.style.top =
e.clientY - rect.top + "px";


this.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},700);



});


});







// BERAT MP3 OTOMATİK BAŞLATMA


window.addEventListener("load",()=>{


const music=document.getElementById("bgMusic");


if(!music){

console.log("Müzik bulunamadı");

return;

}



music.volume=0.7;



let startMusic=()=>{


music.play()

.then(()=>{

console.log("BERAT MP3 başladı");

})


.catch(error=>{

console.log("Tarayıcı otomatik oynatmayı engelledi",error);

});


};



startMusic();



});

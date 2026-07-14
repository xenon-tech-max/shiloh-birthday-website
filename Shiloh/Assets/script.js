// ===============================
// Birthday Website JavaScript
// For Shiloh ❤️
// ===============================


// ---------- COUNTDOWN TIMER ----------
const birthdayDate = new Date("April 11, 2027 00:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    if(distance < 0){

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML =
        "🎂 Happy Birthday Shiloh ❤️";

        startCelebration();

    }

},1000);



// ---------- CINEMATIC INTRO ----------

window.addEventListener("load",()=>{

    const intro = document.querySelector(".cinematic-intro");
    const main = document.querySelector(".main-content");


    setTimeout(()=>{

        intro.classList.add("fade-out");

        setTimeout(()=>{

            intro.style.display="none";
            main.classList.add("show");

        },1500);


    },5000);

});




// ---------- MUSIC CONTROL ----------

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");


let playing = false;


musicBtn.addEventListener("click",()=>{


    if(!playing){

        music.play();
        musicBtn.innerHTML="⏸ Pause Music";
        playing=true;

    }

    else{

        music.pause();
        musicBtn.innerHTML="▶ Play Music";
        playing=false;

    }

});




// ---------- CAKE ANIMATION ----------


function blowCandles(){

    const candles =
    document.querySelectorAll(".flame");


    candles.forEach(flame=>{

        flame.classList.add("out");

    });


    createFireworks();


}




// ---------- FIREWORKS EFFECT ----------


function createFireworks(){

    const fireworks =
    document.querySelector(".fireworks");


    for(let i=0;i<40;i++){

        const spark=document.createElement("span");

        spark.className="spark";


        spark.style.left =
        Math.random()*100+"%";

        spark.style.top =
        Math.random()*80+"%";


        spark.style.animationDelay =
        Math.random()*2+"s";


        fireworks.appendChild(spark);


    }


}



// ---------- AUTOMATIC CELEBRATION ----------

function startCelebration(){

    blowCandles();

    document.querySelector(".birthday-title")
    .classList.add("celebrate");


}



// ---------- LOVE LETTER REVEAL ----------


const letterButton =
document.getElementById("openLetter");


if(letterButton){

letterButton.addEventListener("click",()=>{


    document
    .querySelector(".love-letter")
    .classList.toggle("open");


});


}




// ---------- FLOATING HEARTS ----------


function createHeart(){


    const heart =
    document.createElement("div");


    heart.className="heart";

    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.animationDuration =
    (Math.random()*3+3)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },6000);


}


setInterval(createHeart,800);




// ---------- SMOOTH SCROLL ----------

document.querySelectorAll("a")
.forEach(link=>{

link.addEventListener("click",function(e){

    const target =
    document.querySelector(this.getAttribute("href"));


    if(target){

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    }


});


});




// ---------- SECRET MESSAGE ----------

document.addEventListener("keydown",(e)=>{


    if(e.key==="s" || e.key==="S"){


        alert(
        "Shiloh ❤️\n\n" +
        "One year and three months of memories, " +
        "laughter and love. " +
        "Here's to many more chapters together."
        );


    }


});
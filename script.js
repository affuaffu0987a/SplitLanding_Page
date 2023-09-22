const PlayStaion = document.querySelector(".playsation")
const XboxSeries = document.querySelector(".Xbox")

PlayStaion.addEventListener("click",()=>{
    PlayStaion.style.width = "90%"
    XboxSeries.style.width = "50%"
});

XboxSeries.addEventListener("click",()=>{
    XboxSeries.style.width = "90%"
    PlayStaion.style.width = "50%"
});
const PlayStaion = document.querySelector(".playsation")
const XboxSeries = document.querySelector(".Xbox")
const btn1 = document.querySelector("#btn")
const btn2 = document.querySelector("#btn2")

PlayStaion.addEventListener("click",()=>{
    PlayStaion.style.width = "90%"
    XboxSeries.style.width = "50%"
});

XboxSeries.addEventListener("click",()=>{
    XboxSeries.style.width = "90%"
    PlayStaion.style.width = "50%"
});

btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor = "rgb(80, 39, 119)"
    btn1.style.border = "1px solid rgb(80, 39, 119)"
})

btn2.addEventListener("click",()=>{
    btn2.style.backgroundColor = "violet "
    btn2.style.border = "1px solid violet "
})
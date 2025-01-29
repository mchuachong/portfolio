const posInfoBtn = document.getElementById("pos");
const body = document.getElementById("toDim");
const dismiss = document.getElementById("dismiss");
const navbar = document.getElementById("navbar");
const pInfo = document.getElementById("popbox");

const posInfo = () => {
    body.classList.add("black_overlay");
    navbar.style.display="none";
    pInfo.style.display="block";

}
 console.log(pInfo)
const diss = () => {
    body.classList.remove("black_overlay");
    navbar.style.display="flex";
    pInfo.style.display="none";
}




dismiss.addEventListener("click",diss);
posInfoBtn.addEventListener("click",posInfo);
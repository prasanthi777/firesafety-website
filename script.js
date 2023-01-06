// //dark theme//
// var icon = document.getElementById("icon");

// icon.onclick = function () {
//     document.body.classlist.toggle("dark-theme");
//     if(document.body.classlist.contains("dark-theme")){
//         icon.src="moon.png";
//     }else{
//         icon.src="sun.png";
//     }
// }

const getDiscountBtn = document.querySelector(".get-discount-btn");
const container1 = document.querySelector(".container1");
const closeBtn = document.querySelector(".close");

getDiscountBtn.addEventListener("click", () => {
    container1.classlist.add("active");  
});
closeBtn.addEventListener("click", () => {
    close.classlist.remove("active");  
});


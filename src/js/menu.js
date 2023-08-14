
// JAVASCRIPT OPEN AND CLOSE MOBILEMENU

var iconmobil= document.getElementById("iconmenu");
var menumobile=document.getElementById("menumoblile");
var closeiconmobile=document.getElementById("closeiconmobile");
iconmobil.addEventListener("click",()=>{
  menumobile.style.display="block";
});
  closeiconmobile.addEventListener("click",()=>{
    menumobile.style.display="none";
});

// END OPEN AND CLOSE JS MENU MOBILE 

// ===================================================== START JAVA SCRIPT MENU MOBILE DROP DOWN ================================================

var dropdownmenu=document.getElementById("dropdownmenu");
var menudroupdown=document.getElementById("menudroupdown");

menudroupdown.addEventListener("click",()=>{
  if(dropdownmenu.classList.contains('h-0')){

    dropdownmenu.classList.remove("h-0");
    dropdownmenu.classList.add("h-[500px]");

  }
  else{
    dropdownmenu.classList.remove("h-[500px]");
    dropdownmenu.classList.add("h-0");

  }
});
// ===================================================== END JAVA SCRIPT MENU MOBILE DROP DOWN ================================================
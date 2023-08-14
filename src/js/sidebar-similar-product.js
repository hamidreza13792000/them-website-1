const similarsidebar=document.querySelectorAll(".similar-sidebar");
similarsidebar.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        
        if(item.classList.contains("h-[30px]")){
            item.classList.remove("h-[30px]");
             item.classList.add("h-[150px]");
        }
        else{
            item.classList.remove("h-[150px]");
            item.classList.add("h-[30px]");
        }
        
    });
});

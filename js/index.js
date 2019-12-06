window.addEventListener('load',() =>{
    const audio =document.querySelectorAll(".sound");
    const drums = document.querySelectorAll(".drums div");

    drums.forEach((drum,index) => {
        drum.addEventListener('click',function(){
            audio[index].currentTime = 0;
            audio[index].play();
        });
    });
    
});


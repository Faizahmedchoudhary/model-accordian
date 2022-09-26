console.log("test");

let accordianitem = document.getElementsByClassName('accordians');





for (let i = 0; i < accordianitem.length; i++) {

    accordianitem[i].addEventListener("click", function(){
       
        console.log("my toggle is clicked");
        this.classList.toggle('active');

    });
    
}

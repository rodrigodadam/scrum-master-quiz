let modal = document.getElementById("myModal")

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".overlay").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".overlay").style.display = "none";
});

document.querySelector("#popClose").addEventListener("click", function(){
    document.querySelector(".overlay").style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
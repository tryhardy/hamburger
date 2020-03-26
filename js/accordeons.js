let accordeonItem = document.querySelectorAll(".team__item");

for( let i = 0; i < accordeonItem.length; i++) {
    accordeonItem[i].addEventListener("click", function(e) {
        this.classList.toggle("team__item--active");
        var panel = this.nextElementSibling;
        if (panel.style.Height){
            panel.style.Height = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }    
        
    });
}
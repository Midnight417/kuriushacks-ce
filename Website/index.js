for (i = 1; i <= 3; i++) {
    document.getElementById("info-card-" + i).onmouseenter = function() {
        document.querySelector(".selected-card").classList.remove("selected-card")
        this.classList.add("selected-card")
    }

    document.getElementById("info-card-" + i).onmouseleave = function() {
        document.querySelector(".selected-card").classList.remove("selected-card")
        document.getElementsByClassName("info-card")[1].classList.add("selected-card")
    }
}
function toggleShow() {
    var x = document.getElementById("show");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function navMenu() {
    var nav = document.getElementById("navMobile");
    var head = document.getElementById("navHead");
    var list = document.getElementById("navList");

    if (nav.style.transform === "rotate(0deg)") {
        nav.style.transform = "rotate(-90deg)";
        head.style.height = "100%";
        list.style.display = "block";
    } else {
        nav.style.transform = "rotate(0deg)";
        head.style.height = "80px";
        list.style.display = "none";
    }
}

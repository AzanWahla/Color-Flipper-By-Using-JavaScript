document.getElementById("button").addEventListener("click", function () {
    let random = Math.ceil(Math.random() * 7);

    switch (random) {
        case 1:
            document.getElementsByTagName("main")[0].style.backgroundColor = "red";
            document.getElementsByTagName("span")[0].textContent=" Red"
            break;
        case 2:
            document.getElementsByTagName("main")[0].style.backgroundColor = "blue";
            document.getElementsByTagName("span")[0].textContent=" Blue"
            break;
        case 3:
            document.getElementsByTagName("main")[0].style.backgroundColor = "green";
            document.getElementsByTagName("span")[0].textContent=" Green"          
            break;
        case 4:
            document.getElementsByTagName("main")[0].style.backgroundColor = "yellow";
            document.getElementsByTagName("span")[0].textContent=" Yellow"
            break;
        case 5:
            document.getElementsByTagName("main")[0].style.backgroundColor = "purple";
            document.getElementsByTagName("span")[0].textContent=" Purple"
            break;
        case 6:
            document.getElementsByTagName("main")[0].style.backgroundColor = "orange";
            document.getElementsByTagName("span")[0].textContent=" Orange"
            break;
        case 7:
            document.getElementsByTagName("main")[0].style.backgroundColor = "pink";
            document.getElementsByTagName("span")[0].textContent=" Pink"
            break;
        default:
            document.getElementsByTagName("main")[0].style.backgroundColor = "white";
            document.getElementsByTagName("span")[0].textContent=" White"
            break;
    }
})